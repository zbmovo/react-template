import { request } from "../utils";

export async function getUserInfo() {
  return request({
    method: 'GET',
  })
}

export async function updateUserInfo(body: any) {
  return request({
    method: 'POST',
    body: JSON.stringify(body)
  })
}