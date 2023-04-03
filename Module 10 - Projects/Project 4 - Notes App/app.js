export const renderNotes = (notes) => {
    let newNote = notes.map(({id, note, title, isPinned, isArchived}) => {
        return (
            `<div class="single-note shadow">
                <div class="d-flex align-center title-container">
                    <span class="single-note-title">${title}</span>
                    <button class="button del-btn v-hidden" data-type="del" data-id=${id}>
                        <span data-type="del" data-id=${id} class="material-icons-outlined">
                            delete
                        </span>
                    </button>
                </div>
                <p>${note}</p>
                <div class="options d-flex gap-md">
                    <button data-type="pinned" data-id=${id} class="button btn pinned-btn v-hidden">
                        <span data-type="pinned" data-id=${id} class=${isPinned ? "material-icons": "material-icons-outlined"}>
                            push_pin
                        </span>
                    </button>
                    <button data-type="archive" data-id=${id} class="button btn pinned-btn v-hidden">
                        <span data-type="archive" data-id=${id} class="material-icons-outlined">
                            archive
                        </span>
                    </button>
                </div>
            </div>`
        )
    });

    newNote = newNote.join("");
    return newNote;

}