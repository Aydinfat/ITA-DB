import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

FilePond.registerPlugin(
    FilePondPluginImagePreview
);

const inputElement = document.querySelector('input[type="file"]');
const test = FilePond.create(
    inputElement,
    {
        allowImagePreview: true,
        labelIdle: 'Drag & Drop oder <span class="filepond--label-action"> Durchsuchen </span>',
        labelFileProcessing: 'Gib mir ein Moment',
        labelFileProcessingComplete: 'Ist hochgeladen',

    }
);