import { NoteService } from './services/NoteService.js';
import { HTMLService } from './services/HTMLService.js';
import { LocalStorageService } from './services/LocalStorageService.js';
import { Note } from './Note/Note.js';

const html = new HTMLService();
const local = new LocalStorageService();
const noteService = new NoteService(local.get());
