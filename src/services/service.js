export default class storeService {
    data = [
        {
            id: 1,
            author: 'author',
            title: 'test title',
            imgPath: 'https://img-gorod.ru/27/884/2788405_detail.jpg',
            price: '11',
        },
        {
            id: 2,
            author: 'author 2',
            title: 'test title 2',
            imgPath: 'https://img-gorod.ru/27/793/2779363_detail.jpg',
            price: '22',
        }
    ]

    getBook() {
        return new Promise((resolve) => {
            setTimeout(() => {
               resolve(this.data) 
            }, 700);
        });
    }
}