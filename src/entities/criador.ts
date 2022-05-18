import { Entity, Column, CreateDateColumn , PrimaryColumn } from "typeorm";

@Entity("usu_criador")
export class Criador {
    @PrimaryColumn()
    usu_criador_id : number;
     
    @Column()
	nome : string;

    @Column()
	email : string;
    
    @Column()
	senha  : string;

   

}