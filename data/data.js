const quests = {
    aluminum: {
        start: 'welc',
        messages: {
            'welc': {
                prompt: 'You step off the plane into beautiful Suriname where aluminum bauxite ore is the number one export.',
                responses: {
                    'response1': 'aaa2',
                    'response2': 'aaa2'
                }
            },
            'aaa2': {
                prompt: 'prompt',
                responses: {
                    'response1': null,
                    'response2': 'welc'
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
    brass: {},
    copper: {},
    gold: {},
    iron: {},
    lithium: {},
    mercury: {},
    nickel: {},
    osmium: {},
    silver: {},
    titanium: {},
    vibranium: {},
    zinc: {}
};

export default quests;