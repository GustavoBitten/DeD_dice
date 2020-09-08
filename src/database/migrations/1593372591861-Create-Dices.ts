import {MigrationInterface,Table, QueryRunner} from "typeorm";

export default class CreateAppointments1593372591861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'dices',
                columns:[
                    {
                        name: 'id',
                        type:'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid' ,
                        default: 'uuid_generate_v4()'

                    },
                    {
                        name: 'name',
                        type:'varchar',
                    },
                    {
                        name: 'order',
                        type:'integer',
                    },
                    {
                        name: 'value',
                        type:'integer',
                    },
                    {
                        name: 'type',
                        type:'varchar',
                    },
                    {
                        name: 'created_at',
                        type:'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type:'timestamp',
                        default: 'now()'
                    },
                ]
            }

            )
        )



    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('dices')





    }

}
