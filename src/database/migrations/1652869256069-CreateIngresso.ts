import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateIngresso1652869256069 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table (
                {
                    name: "ingresso",
                    columns:
                    [
                        {
                            name: "ingresso_id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment'
                        },
                        {
                            name: "evento_id",
                            type: "int"
                        },
                        {
                            name: "usu_cliente_id",
                            type: "int"
                        },
                        {
                            name: "code",
                            type: "uuid"
                        },
                        {
                            name: "data_compra",
                            type: "timestamp",
                            default:"now()"
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ingresso");
    }

}
