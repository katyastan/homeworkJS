const fs = require('fs-extra');
// 3. Создать папку
fs.ensureDirSync('NewFolder');
// 4. Создать текстовый файл в созданной папке
fs.outputFileSync('NewFolder/file', 'Hello');
// 5. Создать вторую папку
fs.ensureDirSync('SecondFolder');
// 6. Переместить файл из первой папки во вторую
fs.moveSync('NewFolder/file', 'SecondFolder/file'); 
// 7. Создать третью папку
fs.ensureDirSync('ThirdFolder');
// 8. Скопировать файл из второй в третью папку;
fs.copySync('SecondFolder/file', 'ThirdFolder/file');
// 9. Удалить файлы
fs.removeSync('SecondFolder/file');
fs.removeSync('ThirdFolder/file');
// 10. Удалить все папки
fs.removeSync('NewFolder');
fs.removeSync('SecondFolder');
fs.removeSync('ThirdFolder')
