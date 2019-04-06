import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

// Create an abstract Entity audit 
export abstract class EntityAudit{

  @Column({readonly: true})
  @CreateDateColumn()
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt!: Date;

}