import {
    IsDate,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
} from 'class-validator';
import { UserProps } from '../entities/user.entity';
import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields';

export class UserRules {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    email: string;

    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsDate()
    @IsOptional()
    createdAt: Date;

    constructor(params: UserProps) {
        Object.assign(this, params);
    }
}

export class UserValidator extends ClassValidatorFields<UserRules> {
    validate(data: UserProps): boolean {
        return super.validate(new UserRules(data ?? ({} as UserProps)));
    }
}

export class UserValidatorFactory {
    static create(): UserValidator {
        return new UserValidator();
    }
}
