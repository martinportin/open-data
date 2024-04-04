import { getDictionary } from '@/app/i18n/dictionaries'
import englishDictionary from '@/app/i18n/en.json' assert { type: 'json' }
import swedishDictionary from '@/app/i18n/sv.json' assert { type: 'json' }

test('should return english dictionary when locale is en-GB', async () => {
  expect(await getDictionary('en-GB')).toEqual(englishDictionary)
})

test('should return swedish dictionary when locale is sv-SE', async () => {
  expect(await getDictionary('sv-SE')).toEqual(swedishDictionary)
})
