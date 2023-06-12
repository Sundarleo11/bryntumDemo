CSSHelper.insertRule('#datePickerRenderer .b-calendar-cell .b-datepicker-cell-inner { padding:1.2em; }');

const prices = [
        110, 80, 0, 70, 120, 80, 90,
        90, 110, 80, 0, 0, 120, 80, 90,
        90, 130, 60, 0, 70, 80, 90
    ],
    picker = new DatePicker({
        id       : 'datePickerRenderer',
        appendTo : targetElement,
        width    : '24em',
        date     : new Date(),

        cellRenderer({ cell, date }) {
            const
                sameMonth = date.getMonth() === this.date.getMonth(),
                price     = prices[date.getDate()];

            cell.innerHTML += `<span style="font-size: 0.6em;margin-top: 0.3em;opacity:0.65">${sameMonth && price ? ('$' + price) : '&nbsp;'}</span>`;

            if (sameMonth) {
                cell.dataset.btip = price ? `Daily rate: <strong>$${price}</strong>` : 'No availability on this date';
            }
        },

        onSelectionChange : ({ selection }) => {
            Toast.show(`You picked ${DateHelper.format(selection[0], 'MMM DD')}`);
        }
    });
