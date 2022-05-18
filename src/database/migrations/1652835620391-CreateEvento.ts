import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvento1652835620391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
             new Table ({
                name: "evento",
                columns: [
                    {
                        name: "evento_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "nome_evento",
                        type: "varchar"
                    },
                    {
                        name: "usu_criador_id",
                        type: "int"
                    },
                    {
                        name: "qtd_ingressos",
                        type: "int"
                    },
                    {
                        name: "descricao",
                        type: "varchar"
                    },
                    {
                        name: "endereco",
                        type: "varchar"
                    },
                    {
                        name: "data_inicio",
                        type: "date"
                    },
                    {
                        name: "data_fim",
                        type: "date"
                    },
                    {
                        name: "valor",
                        type: "varchar"
                    },
                ]
             }
                
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropTable("evento");
    }

}
