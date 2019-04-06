import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

export class Image {

  // Add 'not null' constraint
  @Column({nullable: false})
  public url!: string;

  public constructor(
    url: string
  ){
    this.url = url;
  }
}