const quests = {
    aluminum: {
        implemented: true,
        start: 'welc',
        messages: {
            'welc': {
                prompt: 'message1',
                responses: {
                    'response1 (takes you to message2)': 'aaaa',
                    'response2 (takes you to message2)': 'aaaa'
                }
            },
            'aaaa': {
                prompt: 'message2',
                responses: {
                    'response3 (win condition)': null,
                    'response4 (takes you to message1)': 'welc',
                    'response5 (takes you to message3)': 'bbbb'
                }
            },
            'bbbb': {
                prompt: 'message3',
                responses: {
                    'response6 (win condition)': null,
                    'response7 (takes you to message2)': 'aaaa'
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
        implemented: true,
        start: 'aaaa',
        messages: {
            'aaaa': {
                prompt: 'message1 Berylium is most often obtained from the mineral beryl.',
                responses: {
                    'response1': null,
                    'response2': 'bbbb',
                    'response3': 'cccc'
                }
            },
            'bbbb': {
                prompt: 'The US, China, and Khazakstan are the only three countries that produce this metal in commercial amounts.',
                responses: {
                    'response3': 'aaaa',
                    'response4': null,
                    'response5': 'cccc'
                }
            },
            'cccc': {
                prompt: 'It is a key component in aerospace and electronics and useful in creating nuclear weapons. It is also one of the most toxic chemicals.',
                responses: {
                    'response6': 'aaaa',
                    'response7': 'bbbb',
                    'response8': null
                }
            }
        },
        image: '',
        links: [
            'https://mineralseducationcoalition.org/minerals-database/beryllium/',
            'https://en.wikipedia.org/wiki/Beryllium',
            'https://pubmed.ncbi.nlm.nih.gov/12638707/'
        ]
    },
    brass: {
        implemented: true,
        start: 'aaaa',
        messages: {
            'aaaa': {
                prompt: 'Brass is an alloy of copper and zinc. The distinction between brass and bronze is largely historical.',
                responses: {
                    'response1': 'bbbb',
                    'response2': 'aaaa',
                    'response3': 'bbbb'
                }
            },
            'bbbb': {
                prompt: 'Automotive, music, and metalworking are the top 3 industries that use brass.',
                responses: {
                    'response1': 'bbbb',
                    'response2': null,
                    'response3': null
                }
            }
        },
        image: '',
        links: [
            'https://en.wikipedia.org/wiki/Brass',
            'https://www.quora.com/Is-Brass-dangerous-to-the-environment',
            'https://searchworks.stanford.edu/view/8798710',
            'https://www.sciencedirect.com/science/article/pii/S2212827121001712',
            'http://www.madehow.com/Volume-6/Brass.html'
            
        ]
    },
    copper: {
        implemented: false,
        start: '',
        messages: {},
        image: '',
        links: []
    },
    gold: {
        implemented: false,
        start: '',
        messages: {},
        image: '',
        links: []
    },
    iron: {
        implemented: false,
        start: '',
        messages: {},
        image: '',
        links: []
    },
    lithium: {
        implemented: false,
        start: '',
        messages: {},
        image: '',
        links: []
    },
    mercury: {
        implemented: false,
        start: '',
        messages: {},
        image: '',
        links: []
    },
    nickel: {
        implemented: false,
        start: '',
        messages: {},
        image: '',
        links: []
    },
    osmium: {
        implemented: false,
        start: '',
        messages: {},
        image: '',
        links: []
    },
    silver: {
        implemented: false,
        start: '',
        messages: {},
        image: '',
        links: []
    },
    titanium: {
        implemented: true,
        start: 'aaaa',
        messages: {
            'aaaa': {
                prompt: 'Titanium primarily occurs in rutile and ilmenite which is spread throughout Earth\'s crust and lithosphere.',
                responses: {
                    'response1': 'bbbb',
                    'response2': 'aaaa',
                    'response3': 'bbbb'
                }
            },
            'bbbb': {
                prompt: 'The top producers of titanium are Australia, South Africa, and Canada which together produce nearly half of all commercial titanium. India (8.6%), Mozambique (7.7%), China (7.5%), Vietnam (7.3%), and Ukraine (5.3%) are the next top producing countries. ',
                responses: {
                    'response1': 'bbbb',
                    'response2': 'cccc',
                    'response3': null
                }
            },
            'cccc': {
                prompt: 'Titanium is used in aerospace for producing jet engine parts, airplane bodies, rockets, satellites, missiles, compressors, fan blades, landing gear, flaps, spoilers, engine compartments, wing beams, fuel tanks, and boosters.',
                responses: {
                    'response1': 'bbbb',
                    'response2': null,
                    'response3': 'aaaa'
                }
            }
        },
        image: '',
        links: [
            'https://en.wikipedia.org/wiki/Titanium',
            'https://lawdigitalcommons.bc.edu/cgi/viewcontent.cgi?article=1500&context=iclr',
            'https://www.sciencelearn.org.nz/resources/1725-producing-titanium-based-alloys',
            'http://metalpedia.asianmetal.com/metal/titanium/application.shtml'
        ]
    },
    vibranium: {
        implemented: true,
        start: 'aaaa',
        messages: {
            'aaaa': {
                prompt: 'Vibranium is faaaaaake.',
                responses: {
                    'response1': 'bbbb',
                    'response3': 'bbbb'
                }
            },
            'bbbb': {
                prompt: 'I hate that I didn\'t realize that',
                responses: {
                    'response1': 'bbbb',
                    'response2': null,
                    'response3': null
                }
            }
        },
        image: '',
        links: [
            'https://en.wikipedia.org/wiki/Vibranium'
        ]
    },
    zinc: {
        implemented: false,
        start: '',
        messages: {},
        image: '',
        links: []
    }
};

export default quests;