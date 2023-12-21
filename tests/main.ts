/* -------------------------- 🎫 Main tickets check ------------------------- */
import { Selector } from 'testcafe'

fixture('🚩 Main CSM tickets check').page('https://csmbucuresti.iabilet.ro/')

test('🎫 CSM tickets', async (t) => {
  /** Checking availability of tickets */
  await t
    .wait(6_000)
    .expect(Selector('div').withText('Esbjerg').exists)
    .notOk()
    .expect(Selector('h1').withText('Esbjerg').exists)
    .notOk()
    .expect(Selector('div').withText('mai').exists)
    .notOk()
    .expect(Selector('p').withText('mai').exists)
    .notOk()
})
