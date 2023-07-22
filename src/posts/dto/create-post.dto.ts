import { IsInt, IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    name: string;
    @IsInt()
    power: number;
    @IsString()
    img: string;
 
}
