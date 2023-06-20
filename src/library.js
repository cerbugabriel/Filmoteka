// imports
import { renderLibrary } from './js-files/buildLibrary';
import { libraryModal } from './js-files/library/library-modal';
import { libraryLocalStorageHandle } from './js-files/library/library-local-storage';
import { handleLibraryModalBtns } from './js-files/library/changeLibraryModalBtns';

const libraryInit = () => {
  renderLibrary();
  libraryModal();
  libraryLocalStorageHandle();
  handleLibraryModalBtns();
};

window.addEventListener('DOMContentLoaded', libraryInit);
// renderLibrary();
