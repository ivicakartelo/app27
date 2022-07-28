const products = [
    {
        id: '1',
        image: 'assets/images/1.jpg',
        name: 'Product1',
        description: [
            `Vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ],
        comments: [
            {
            id: 0,
            rating: 5,
            comment: "Donec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare",
            author: "Sethy Humy",
            date: "2022-05-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus",
            author: "Miu Avy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Pulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifend",
            author: "Gheny Almy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Egestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectus",
            author: "Gere Hook",
            date: "2022-06-12T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.",
            author: "Mett Very",
            date: "2022-06-14T17:57:28.556094Z"
            }
        ]  
    },    
    {
        id: '2',
        image: 'assets/images/2.jpg',
        name: 'Product2',
        description: [
            `Vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ],
        comments: [
            {
            id: 0,
            rating: 2,
            comment: "Donec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare",
            author: "Sethy Humy",
            date: "2022-05-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus",
            author: "Miu Avy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Pulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifend",
            author: "Gheny Almy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Egestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectus",
            author: "Gere Hook",
            date: "2022-06-12T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.",
            author: "Mett Very",
            date: "2022-06-14T17:57:28.556094Z"
            }
        ]  
    },     
    {
        id: '3',
        image: 'assets/images/3.jpg',
        name: 'Product3',
        description: [
            `Vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ],
        comments: [
            {
            id: 0,
            rating: 4,
            comment: "Donec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare",
            author: "Sethy Humy",
            date: "2022-05-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus",
            author: "Miu Avy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Pulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifend",
            author: "Gheny Almy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Egestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectus",
            author: "Gere Hook",
            date: "2022-06-12T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.",
            author: "Mett Very",
            date: "2022-06-14T17:57:28.556094Z"
            }
        ]  
    },
    {
        id: '4',
        image: 'assets/images/6.jpg',
        name: 'Product4',
        description: [
            `Vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ],
        comments: [
            {
            id: 0,
            rating: 3,
            comment: "Donec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare",
            author: "Sethy Humy",
            date: "2022-05-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus",
            author: "Miu Avy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Pulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifend",
            author: "Gheny Almy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Egestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectus",
            author: "Gere Hook",
            date: "2022-06-12T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.",
            author: "Mett Very",
            date: "2022-06-14T17:57:28.556094Z"
            }
        ]  
    },
    {
        id: '5',
        image: 'assets/images/7.jpg',
        name: 'Product5',
        description: [
            `Vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ],
        comments: [
            {
            id: 0,
            rating: 1,
            comment: "Donec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare",
            author: "Sethy Humy",
            date: "2022-05-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus",
            author: "Miu Avy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Pulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifend",
            author: "Gheny Almy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Egestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectus",
            author: "Gere Hook",
            date: "2022-06-12T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.",
            author: "Mett Very",
            date: "2022-06-14T17:57:28.556094Z"
            }
        ]
    },
    {
        id: '6',
        image: 'assets/images/8.jpg',
        name: 'Products6',
        description: [
            `Vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ],
        comments: [
            {
            id: 0,
            rating: 4,
            comment: "Donec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare",
            author: "Sethy Humy",
            date: "2022-05-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus",
            author: "Miu Avy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Pulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifend",
            author: "Gheny Almy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Egestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectus",
            author: "Gere Hook",
            date: "2022-06-12T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.",
            author: "Mett Very",
            date: "2022-06-14T17:57:28.556094Z"
            }
        ]
    }, {
        id: '7',
        image: 'assets/images/10.jpg',
        name: 'Product7',
        description: [
            `Vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ],
        comments: [
            {
            id: 0,
            rating: 3,
            comment: "Donec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornareDonec finibus lectus Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare",
            author: "Sethy Humy",
            date: "2022-05-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectusNunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus",
            author: "Miu Avy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Pulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifendPulvinar diam. Nam eleifend",
            author: "Gheny Almy",
            date: "2022-06-11T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Egestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectusEgestas viverra. Donec finibus lectus",
            author: "Gere Hook",
            date: "2022-06-12T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.Diam. Nam eleifend egestas viverra.",
            author: "Mett Very",
            date: "2022-06-14T17:57:28.556094Z"
            }
        ] 
    }, 
];
export default products;