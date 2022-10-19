import { NoteService } from './services/noteService.js';
import { HTMLService } from './services/htmlService.js';
import { LocalStorageService } from './services/localStorageService.js';
import { Note } from './Note/Note.js';

const html = new HTMLService();
const local = new LocalStorageService();
const noteService = new NoteService(local.get());
