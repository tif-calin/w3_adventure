const quests = {
    aluminum: {
        implemented: true,
        start: 'welc',
        messages: {
            'welc': {
                prompt: 'message1',
                responses: {
                    'response1': 'aaa2',
                    'response2': 'aaa2'
                }
            },
            'aaa2': {
                prompt: 'message2',
                responses: {
                    'response3': null,
                    'response4': 'welc'
                }
            }
        },
        image: '',
        links: [
            'https://mineralseducationcoalition.org/minerals-database/aluminum/',
            'https://en.wikipedia.org/wiki/Aluminium',
            'https://aluminium-stewardship.org/wp-content/uploads/2017/04/Mining-the-Aluminium-Industry-and-Indigenous-Peoples-Nov2015.pdf'

        ]
    },
    beryllium: {
        links: [
            'https://mineralseducationcoalition.org/minerals-database/beryllium/'
        ]
    },
    brass: {
        implemented: false
    },
    copper: {
        implemented: false
    },
    gold: {
        implemented: false
    },
    iron: {
        implemented: false
    },
    lithium: {
        implemented: false
    },
    mercury: {
        implemented: false
    },
    nickel: {
        implemented: false
    },
    osmium: {
        implemented: false
    },
    silver: {
        implemented: false
    },
    titanium: {
        implemented: false
    },
    vibranium: {
        implemented: false
    },
    zinc: {
        implemented: false
    }
};

export default quests;