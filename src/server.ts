import 'reflect-metadata'
import express, { json, Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import routes from './routes'
import cors from "cors";
import http from "http";

import SocketIO,{Server} from "socket.io";

const app = express()
const server = http.createServer(app);
const io = SocketIO(server);

const PORT : string|number = process.env.PORT || 3344;

app.use(cors())
app.use(routes)
app.use(json())
import './database'
import AppError from './errors/AppError'


app.use((err: Error, request: Request, response: Response, _: NextFunction) =>{
  if(err instanceof AppError){
    return response.status( err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }
  
  console.error(err)
  
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

// Test to implements SocketOi

io.on("connection", (socket) => {
  console.log("New client connected");
  
  socket.on('dice', data => {
    console.log('[SOCKET] Chat.message => ', data)
    io.emit('dice',data)
})

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});




server.listen(PORT,()=>console.log('Server online on port 3333'))