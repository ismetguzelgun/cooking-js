// Async as we know
// import { sumValues } from './sum'
// export function asyncAdd (values) {
//   setTimeout(() => {
//     let total = sumValues(values);
//     console.log(`Async Total: ${total}`);
//     return total;
//   }, 500)
// }

// async as promise
import { sumValues } from './sum'

export function asyncAddPt (values) {
  setTimeout(() => {
    let total = sumValues(values)
    console.log(`AsyncPt Total: ${total}`)
    return total
  }, 500)
}
export function asyncAdd (values) {
  return new Promise(testfunc =>
    setTimeout(() => {
      let total = sumValues(values)
      console.log(`Async Total: ${total}`)
      testfunc(total)
    }, 500)
  )
}
