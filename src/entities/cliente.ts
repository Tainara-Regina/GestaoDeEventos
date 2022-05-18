import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("usu_cliente")
export class Cliente {
    @PrimaryGeneratedColumn('increment')
    usu_cliente_id : number;
     
    @Column()
	nome : string;

    @Column()
	email : string;
    
    @Column()
	senha  : string;

   

}