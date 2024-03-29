let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function (partySize) {
        if (this.checkAvailability(partySize)){
            this.guestCount += partySize;
        }
    },
    removeParty: function (partySize) {
        if (partySize >= this.guestCount)
        {
            this.guestCount = 0;
        }
        else 
        {
            this.guestCount -= partySize;
        }
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));

restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));