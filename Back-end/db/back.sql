INSERT INTO defaultdb.author (author, job,image) 
VALUES ('Cristina Gómez', 'Frontend Developer', 'https://images.pexels.com/photos/3732652/pexels-photo-3732652.jpeg'),
('Cipactli Casillas', 'Product Designer', 'https://images.pexels.com/photos/4126738/pexels-photo-4126738.jpeg'),
('Paula Castillo', 'UI/UX Designer', 'https://images.pexels.com/photos/4226462/pexels-photo-4226462.jpeg'),
('Patri Gutiérrez', 'Full Stack Developer','https://images.pexels.com/photos/4646246/pexels-photo-4646246.jpeg');
SELECT * FROM defaultdb.author;


INSERT INTO defaultdb.project (name, slogan,repo,demo,technologies, `desc`) 
VALUES ('GreenMarket',
'El futuro del consumo responsable',
'https://github.com/usuario/greenmarket',
'https://greenmarket.demo.com','React, Node.js, MongoDB, Tailwind CSS',
'Marketplace online enfocado en productos ecológicos, con integración de pagos y recomendaciones personalizadas.');
SELECT * FROM defaultdb.project ;
INSERT INTO defaultdb.project (name, slogan,repo,demo,technologies, `desc`) 
VALUES ('TravelSync',
'Tu viaje, siempre sincronizado',
'https://github.com/usuario/travelsync',
'https://travelsync.demo.com',
'Next.js, Supabase, Styled Components',
'Aplicación colaborativa para planear viajes en grupo, compartir itinerarios y coordinar presupuestos.'), 
('Code4All',
'Aprende a programar desde cero',
'https://github.com/usuario/code4all',
'https://code4all.demo.com',
'Angular, Node.js, PostgreSQL',
'Plataforma educativa con cursos interactivos de programación y foros colaborativos.'),
('WellnessApp',
'Cuida tu mente y tu cuerpo',
'https://github.com/usuario/wellnessapp',
'https://wellnessapp.demo.com',
'Vue.js, Firebase, Sass',
'App móvil para el seguimiento de hábitos saludables, ejercicios de meditación y rutinas personalizadas.');
SELECT * FROM defaultdb.project ;
INSERT INTO defaultdb.project (photo)
VALUES ('https://www.canva.com/design/DAGqsYpCFOE/ED7VkGP92mYkHVIpK1CXBw/view?utm_content=DAGqsYpCFOE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e1867cc57'),
('https://www.canva.com/design/DAGqsVC1kCQ/2O3E6kbLlPQDSLvjVXq6HA/view?utm_content=DAGqsVC1kCQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h20bbdc7360'),
('https://www.canva.com/design/DAGqsTNFz8k/p0QDT3rWvuqrGMIWwmDebQ/view?utm_content=DAGqsTNFz8k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h738b86fcc3'),
('https://www.canva.com/design/DAGqsdkuEQA/2Q18Mc2M61whEeRgszkzOQ/view?utm_content=DAGqsdkuEQA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0e8b59224f');
UPDATE defaultdb.project SET photo = 'https://www.canva.com/design/DAGqsYpCFOE/ED7VkGP92mYkHVIpK1CXBw/view?utm_content=DAGqsYpCFOE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e1867cc57' WHERE idproject = 1;
UPDATE defaultdb.project 
SET photo = 'https://www.canva.com/design/DAGqsVC1kCQ/2O3E6kbLlPQDSLvjVXq6HA/view?utm_content=DAGqsVC1kCQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h20bbdc7360' 
WHERE idproject = 2;
UPDATE defaultdb.project 
SET photo = 'https://www.canva.com/design/DAGqsTNFz8k/p0QDT3rWvuqrGMIWwmDebQ/view?utm_content=DAGqsTNFz8k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h738b86fcc3' 
WHERE idproject = 3;
UPDATE defaultdb.project 
SET photo = 'https://www.canva.com/design/DAGqsdkuEQA/2Q18Mc2M61whEeRgszkzOQ/view?utm_content=DAGqsdkuEQA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0e8b59224f'
WHERE idproject = 4;
SELECT * FROM defaultdb.project ;