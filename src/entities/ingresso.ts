import { Entity, Column, CreateDateColumn , PrimaryColumn } from "typeorm";

@Entity("ingresso")
export class Ingresso {
    @PrimaryColumn()
    ingresso_id : number;
    
    @Column()
	evento_id : number;

    @Column()
	usu_cliente_id : number;

    @Column()
	code : string;

    @CreateDateColumn()
	data_compra : Date;

}