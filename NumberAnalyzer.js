//Program pobiera liczbę od użytkownika i wypisuje informacje na jej temat. Można również wpisać liczbę w postaci naukowej. Liczba doskonała to liczba naturalna, która jest sumą wszystkich swych naturalnych dzielników właściwych (to znaczy od niej mniejszych). Program oblicza też ciąg Collatza, tzn. jeśli pobrana liczba jest parzysta, dzieli ją przez 2, a jeśli nieparzysta, mnoży ją razy 3 i dodaje do niej 1. Program robi to samo z wynikiem tak długo aż wynik będzie równy 1. Na końcu wypisze każdy wyraz utworzonego ciągu i liczbę tych wyrazów.

let sumOfFactors = 1, number = Number(prompt('Podaj dodatnią liczbę całkowitą mniejszą od 1 000 000: '));

const factors = [1], sequence = [number];

while (!Number.isInteger(number) || number < 1 || number > 999999)     number = Number(prompt('Nie podano poprawnych danych. Miała to być dodatnia liczba całkowita mniejsza od 1 000 000. Spróbuj ponownie: '));

for(let i = 2; i<=number; i++)
    if(number % i == 0)
        factors.push(i);
        
for(let i = 1; i+1 < factors.length; i++)
    sumOfFactors+=factors[i];

console.log(`Ta liczba${factors.length == 2 ? '' : ' nie'} jest liczbą pierwszą, jest ${number % 2 == 0? '' :'nie'}parzysta,${sumOfFactors == number && number != 1?'' : ' nie'} jest doskonała, ${Math.sqrt(2*number+0.25)%1 == 0.5 ? '' : 'nie '}jest liczbą trójkątną i ${number.toString().split('').reverse().join('') == number ? '' : 'nie '}jest palindromem.\nDzielnikami tej liczby są: ` + factors.join(', ') + '.')
    
while (number != 1) {
    number = (number % 2 == 0) ? number / 2 : number * 3 + 1;
    sequence.push(number);
}

console.log('Wyrazy ciągu Collatza: ' + sequence.join(' → ') + ".\nLiczba wyrazów: " + sequence.length +'.');