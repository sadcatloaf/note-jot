import { Notes } from './models/Notes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  noteJots = [
    new Notes({
      name: 'Remember',
      color: 'pink',
      description: 'Make sure you always check to see if things work on console and not to forget to draw to page',
      createdDate: '11/8/2024'
    })
  ]

  /** @type {Notes} */
  activeNotes = null



  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())