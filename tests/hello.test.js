import request from 'supertest';
import express from 'express';
import hello from '../routes/hello.js';
import {expect, jest, test} from '@jest/globals';

jest.useFakeTimers();

const app = new express();
app.use('/', hello);
app.set('view engine', 'jade');

describe('route handler', () => {
	test('responds to /', async () => {
		const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
		expect(res.text.includes('The answer is 42')).toBeTruthy()
	})
})