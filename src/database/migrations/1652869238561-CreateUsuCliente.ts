import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuCliente1652869238561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table (
                {
                    name: "usu_cliente",
                    columns:
                    [
                        {
                            name: "usu_cliente_id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment'
                        },
                        {
                            name: "nome",
                            type: "varchar"
                        },
                        {
                            name: "email",
                            type: "varchar"
                        },
                        {
                            name: "senha",
                            type: "varchar"  
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usu_cirador");
    }

}
