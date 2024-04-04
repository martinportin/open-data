/**
 * @jest-environment node
 */

import '@testing-library/jest-dom'
import { middleware } from '@/middleware'
import { NextRequest } from 'next/server'

test('should not redirect (return undefined) if pathname loclae is supported', () => {
  const requestSwedish = new NextRequest('https://opendata.se/sv-SE', {})
  const requestSwedishExtended = new NextRequest(
    'https://opendata.se/sv-SE/subjects',
    {}
  )
  const requestBritish = new NextRequest('https://opendata.se/en-GB', {})
  const requestBritishExtended = new NextRequest(
    'https://opendata.se/en-GB/subjects',
    {}
  )
  const requests = [
    requestSwedish,
    requestSwedishExtended,
    requestBritish,
    requestBritishExtended
  ]
  requests.forEach((request) => {
    expect(middleware(request)).toBeUndefined()
  })
})

test('should redirect to https://opendata.se/en-GB when url lacks locale', () => {
  testRedirectToInternationalizationSubPath(
    'https://opendata.se',
    'https://opendata.se/en-GB'
  )
})

test('should redirect to https://opendata.se/en-GB/subjects when url lacks locale', () => {
  testRedirectToInternationalizationSubPath(
    'https://opendata.se/subjects',
    'https://opendata.se/en-GB/subjects'
  )
})

const testRedirectToInternationalizationSubPath = (
  url: string,
  newUrl: string
) => {
  const spy = jest.spyOn(Response, 'redirect')
  const request = new NextRequest(url)
  middleware(request)
  request.nextUrl.pathname = newUrl
  expect(spy).toHaveBeenCalledWith(request.nextUrl)
}
