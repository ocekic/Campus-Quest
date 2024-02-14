document.addEventListener('DOMContentLoaded', function() {
    loadRewards();
});

function loadRewards() {
    const rewards = [
        { id: 1, nom: 'Bon de réduction Cafétéria', points: 10 },
        { id: 2, nom: 'Ticket Cinéma', points: 15 },
        // Ajoutez d'autres récompenses ici
    ];

    const rewardsContainer = document.querySelector('#listeRecompenses');
    rewards.forEach(reward => {
        const rewardElement = document.createElement('div');
        rewardElement.classList.add('col-md-4', 'mb-3');
        rewardElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${reward.nom}</h5>
                    <p class="card-text">${reward.points} Points</p>
                    <button class="btn btn-primary">Échanger</button>
                </div>
            </div>
        `;
        rewardsContainer.appendChild(rewardElement);
    });
}
