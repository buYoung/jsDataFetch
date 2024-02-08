// server.js 파일 생성

// 필요한 모듈 임포트
import express from 'express';
import { faker } from '@faker-js/faker';
import cors from "cors";

// express 애플리케이션 초기화
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// 빅데이터 테스트 데이터를 생성하여 반환하는 라우트
app.get('/api/data', (req, res) => {
    // 요청에서 데이터 개수를 추출 (기본값: 10)
    const count = parseInt(req.query.count) || 10;

    // 생성할 데이터 배열
    const data = [];

    // 요청된 개수만큼 무작위 데이터 생성
    for (let i = 0; i < count; i++) {
        data.push({
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            address: faker.location.streetAddress(),
            phone: faker.phone.number(),
        });
    }

    // 생성된 데이터를 응답으로 반환
    res.json(data);
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 ${PORT}번 포트에서 실행중입니다.`);
});
