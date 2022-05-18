import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuCriador1652869225591 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table (
                {
                    name: "usu_criador",
                    columns:
                    [
                        {
                            name: "usu_criador_id",
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
