<template>
  <div>
    <button ref="box">click</button>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  toRefs,
  readonly,
  isRef,
  isReactive,
  onMounted,
} from 'vue'

import { Subject, fromEvent, of } from 'rxjs'
import { map, filter } from 'rxjs/operators'

export default {
  name: 'PageProject',
  data() {
    return {}
  },

  setup() {
    const box = ref(null)

    const data$ = new Subject()

    onMounted(() => {
      data$.subscribe((value) => {
        console.log(value)
      })

      data$.next(1)

      // 2.
      const click$ = fromEvent(box.value, 'click')

      let count = 0
      click$.subscribe((event) => {
        count++

        data$.next(count)
      })

      // 3.
      const counterMap$ = click$.pipe(map((value, index) => index + 1))

      counterMap$.subscribe((value) => {
        console.log(value)
      })

      const counterFilter$ = counterMap$.pipe(filter((value) => value > 2))

      counterFilter$.subscribe((value) => {
        console.log(value)
      })
    })

    return {
      box,
    }
  },
}
</script>

<style lang="scss">
</style>