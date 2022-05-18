import { Entity, Column, CreateDateColumn , PrimaryColumn } from "typeorm";

@Entity("evento")
export class Evento {
    @PrimaryColumn()
    evento_id : number;
     
    @Column()
	nome_evento : string;

    @Column()
	usu_criador_id : number;

    @Column()
	qtd_ingressos : number;

    @Column()
	descricao : string;
    
    @Column()
	endereco  : string;

    @CreateDateColumn()
	data_inicio : Date;

    @CreateDateColumn()
    data_fim : Date;
    
    @Column()
	valor : string;

}