import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { EnvConfigModule } from '../../env-config.module';
import { ConfigModule } from '@nestjs/config';

describe('EnvConfigService', () => {
    let sut: EnvConfigService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [EnvConfigModule.forRoot(), ConfigModule.forRoot()],
            providers: [EnvConfigService],
        }).compile();

        sut = module.get<EnvConfigService>(EnvConfigService);
    });

    it('should be defined', () => {
        expect(sut).toBeDefined();
    });

    it('should return PORT env variable ', () => {
        expect(sut.getAppPort()).toBe(3000);
    });

    it('should return NODE_ENV env variable ', () => {
        expect(sut.getNodeEnv()).toBe('test');
    });
});
