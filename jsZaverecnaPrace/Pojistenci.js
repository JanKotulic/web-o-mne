class Pojistenci {
    constructor() {
        const zaznamyStorage = localStorage.getItem("zaznamy");
        this.zaznamy = zaznamyStorage ? JSON.parse(zaznamyStorage) : [];

        this.firstNameInput = document.getElementById("firstName");
        this.secondNameInput = document.getElementById("secondName");
        this.ageInput = document.getElementById("age");
        this.phoneNumberInput = document.getElementById("phoneNumber");
        this.ulozitButton = document.getElementById("ulozit");
        this.vypisTabulku = document.getElementById("teloTabulkaZP");

        this.nastavPojistence();
    }


    nastavPojistence() {
        this.ulozitButton.onclick = () => {
            const zaznam = new Zaznam(this.firstNameInput.value, this.secondNameInput.value, this.ageInput.value, this.phoneNumberInput.value);
            this.zaznamy.push(zaznam);
            this.ulozZaznamy();
            this.vypisPojistence();
            
        };
    }

    ulozZaznamy() {
		localStorage.setItem("zaznamy", JSON.stringify(this.zaznamy))};

    vypisPojistence() {
        this.vypisTabulku.innerHTML = "";
        for (let i = 0; i < this.zaznamy.length; i++) {
            const zaznam = this.zaznamy[i];
            this.vypisTabulku.innerHTML += `<tr><td>${zaznam.firstName} ${zaznam.secondName}</td> <td>${zaznam.age}</td> <td>${zaznam.phoneNumber}</td></tr>`;
            
        }
    }
}
