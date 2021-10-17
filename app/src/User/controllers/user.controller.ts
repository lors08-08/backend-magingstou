import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "../services/user.service";
import {CreateUserDto} from "../dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post()
    create(@Body() dto:CreateUserDto) {
        return this.userService.createUser(dto)
    }
    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }
}