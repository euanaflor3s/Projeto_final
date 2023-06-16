 CREATE TABLE produtos (
 codigo SERIAL PRIMARY KEY,
	 titulo TEXT NOT NULL,
	 data_cadastro DATE NOT NULL,
	 preco TEXT NOT NULL,
	 descricao TEXT NOT NULL,
	 imagem TEXT NOT NULL
 );
 
 INSERT INTO produtos (titulo, data_cadastro, preco, descricao, imagem)
 VALUES 
 ('Abacate', '20230616', 5, 'Originário da América Central, o abacate possui vitaminas A, B, C, D, E, proteínas, cálcio, magnésio, fósforo, ferro e potássio.', 'https://static.todamateria.com.br/upload/ab/ac/abacate-cke.jpg'),
 ('Abacaxi', '20230616', 5, 'Encontrado originalmente em toda a América do Sul tropical, o abacaxi é rico em vitamina C e contribui para o funcionamento do sistema imunológico.', 'https://static.todamateria.com.br/upload/ab/ac/abacaxi-0-cke.jpg?auto_optimize=low'),
 ('Banana', '20230616', 10, 'Rica em minerais e vitaminas que auxiliam no sistema imunológico, a banana podem ser consumida fresca, cozida, frita, assada ou desidratada.', 'https://static.todamateria.com.br/upload/ba/na/banana-0-cke.jpg?auto_optimize=low'),
 ('Biribá', '20230616', 8, 'Típica da Amazônia, o biribá é uma fruta de sabor suave e adocicado, sendo muito consumida em estado natural.', 'https://static.todamateria.com.br/upload/bi/ri/biriba-cke.jpg?auto_optimize=low'),
 ('Carambola', '20230616', 15, 'Originária do Sudeste da Ásia, a carambola contém vitaminas A, B e C.', 'https://static.todamateria.com.br/upload/ca/ra/carambola-cke.jpg?auto_optimize=low'),
 ('Cereja', '20230616', 15, 'Originária da Ásia, a cereja é uma fruta rica em vitaminas A, B e C, cálcio, fósforo, ferro e vitaminas.', 'https://static.todamateria.com.br/upload/ce/re/cereja-cke.jpg?auto_optimize=low'),
 ('Framboesa', '20230616', 10, 'Originária da Europa e parte da Ásia, a framboesa é fonte de vitaminas, cálcio, fósforo e ferro.', 'https://static.todamateria.com.br/upload/fr/am/framboesa-cke.jpg?auto_optimize=low'),
 ('Figo ', '20230616', 11, 'O figo é uma fruta que possui alto índice de açúcar, potássio, cálcio e fósforo. Rico em fibras, ele auxilia na redução do colesterol sanguíneo.', 'https://static.todamateria.com.br/upload/fr/ut/fruta18-0-cke.jpg?auto_optimize=low'),
 ('Goiaba', '20230616', 6, ' Rica em vitamina C, ela possui vitaminas A, E e quase todas do complexo B, além de minerais, em menor quantidade.', 'https://static.todamateria.com.br/upload/go/ai/goaiaba-cke.jpg?auto_optimize=low'),
 ('Groselha', '20230616', 20, 'Originária da Europa e Ásia, a groselha é rica em vitamina C e potássio.', 'https://static.todamateria.com.br/upload/gr/os/groselha-0-cke.jpg?auto_optimize=low'),
 ('Ingá', '20230616', 5, 'Originária da Amazônia, a polpa da fruta envolve a semente, sendo consumida em estado natural.', 'https://static.todamateria.com.br/upload/fr/ut/fruta22-cke.jpg?auto_optimize=low'),
 ('Laranja', '20230616', 10, 'Rica em vitamina C, a laranja é uma fruta rica em ácido cítrico. Indicada para prevenir câncer, ela fortalece o sistema imunológico, reduz o colesterol e protege o coração.', 'https://static.todamateria.com.br/upload/la/ra/laranja-cke.jpg?auto_optimize=low'),
 ('Limão', '20230616', 12, 'Originário da Ásia, o limão é fonte de vitamina C e minerais. Ele contribui na melhoria da digestão, fortalece o sistema imunológico, ajuda a manter o peso e evita o envelhecimento precoce.', 'https://static.todamateria.com.br/upload/li/ma/limao-cke.jpg?auto_optimize=low'),
 ('Maçã', '20230616', 14, 'Originária da Ásia e Europa, a maçã é uma fruta que auxilia na prevenção de doenças. Possui vitaminas A, B1, B2, C e K, ferro e fósforo.', 'https://static.todamateria.com.br/upload/fr/ut/fruta30maca-cke.jpg?auto_optimize=low'),
 ('Mamão', '20230616', 8, 'O mamão é uma fruta rica em vitaminas e minerais, como vitaminas C e E, cálcio, fósforo, ferro.', 'https://static.todamateria.com.br/upload/ma/ma/mamao-cke.jpg?auto_optimize=low'),
 ('Manga', '20230616', 16, 'Nativa da Índia, a manga possui quantidades significativas de açúcar, vitaminas e minerais. Ela é indicada para combater anemia devido sua alta concentração de ferro.', 'https://static.todamateria.com.br/upload/ma/ng/manga-cke.jpg?auto_optimize=low'),
 ('Maracujá', '20230616', 13, 'Amplamente encontrado em regiões tropicais, o maracujá é muito conhecido pelo seu poder calmante. Possui vitaminas A, C e do complexo B, além de ferro, sódio, cálcio e fósforo.', 'https://static.todamateria.com.br/upload/ma/ra/maracuja-cke.jpg?auto_optimize=low'),
 ('Melancia', '20230616', 11, 'Originária da África, a melancia é rica em água, o que a torna muito refrescante. Possui açúcar, cálcio, fósforo e ferro e apresenta capacidade antioxidante e anti-inflamatória.', 'https://static.todamateria.com.br/upload/me/la/melancia-cke.jpg?auto_optimize=low'),
 ('Morango', '20230616', 7, 'Originário da Europa, o morango possui vitaminas C, A, E, B5 e B6, além de cálcio, potássio, ferro, selênio e magnésio.', 'https://static.todamateria.com.br/upload/mo/ra/morango-cke.jpg?auto_optimize=low'),
 ('Pera', '20230616', 6, 'A pera é uma fruta rica em sódio, potássio, ferro, magnésio e cálcio. Ajuda a melhorar a prisão de ventre, perder peso e controlar a diabetes.', 'https://static.todamateria.com.br/upload/fr/ut/fruta39pera-cke.jpg?auto_optimize=low')
 
 