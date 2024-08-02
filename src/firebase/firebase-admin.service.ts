import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseAdminService {
    constructor(private readonly configService: ConfigService) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
                privateKey: configService.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
                clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
            }),
            // databaseURL: configService.get<string>('FIREBASE_DATABASE_URL'),
        });
    }
}
