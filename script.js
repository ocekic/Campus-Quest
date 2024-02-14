document.addEventListener('DOMContentLoaded', function() {
    loadMissions();
    loadRewards();
    loadCommunityContributions();
});



function loadMissions() {

    const missions = [
        { id: 1, titre: 'Nettoyage du parc du campus', points: 5, temps: '2 heures', inscrits: ['Alex', 'Marie'] },
        { id: 2, titre: 'Organisation d\'une collecte de livres', points: 8, temps: '3 heures', inscrits: ['Alex', 'Marie'] },
        { id: 3, titre: 'Atelier de recyclage créatif', points: 4, temps: '1 heure', inscrits: ['Alex', 'Marie'] },
        { id: 4, titre: 'Tutorat pour étudiants en première année', points: 10, temps: '2 heures', inscrits: ['Alex', 'Marie'] },
    ];
    

    const missionsContainer = document.querySelector('#missions');
    missions.forEach((mission, index) => {
        const missionElement = document.createElement('div');
        missionElement.classList.add('card', 'my-3');
        missionElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title" data-bs-toggle="collapse" href="#collapseMission${mission.id}" role="button" aria-expanded="false" aria-controls="collapseMission${mission.id}">
                    ${mission.titre}
                </h5>
                <div class="collapse" id="collapseMission${mission.id}">
                    <div class="card card-body">
                        Points: ${mission.points} - Temps estimé: ${mission.temps}
                        <p>Inscrits: ${mission.inscrits.join(', ')}</p>
                    </div>
                </div>
                <button class="btn btn-primary">Participer</button>
            </div>
        `;
        missionsContainer.appendChild(missionElement);
    });
}

function loadRewards() {
    const rewards = [
        { id: 1, nom: 'Bon de réduction Cafétéria', points: 10 },
        { id: 2, nom: 'Ticket Cinéma', points: 15 }
    ];

    const rewardsContainer = document.querySelector('#recompenses');
    rewards.forEach(reward => {
        const rewardElement = document.createElement('div');
        rewardElement.classList.add('card', 'my-3');
        rewardElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${reward.nom}</h5>
                <p class="card-text">Coût en points: ${reward.points}</p>
            </div>
        `;
        rewardsContainer.appendChild(rewardElement);
    });
}

function loadCommunityContributions() {
    const contributions = [
        { id: 1, nom: 'Alex', contribution: 'Nettoyage du parc du campus' },
        { id: 2, nom: 'Marie', contribution: 'Organisation d\'une collecte de livres' }
    ];

    const communityContainer = document.querySelector('#communaute');
    contributions.forEach(contribution => {
        const contributionElement = document.createElement('div');
        contributionElement.classList.add('card', 'my-3');
        contributionElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Contribution de ${contribution.nom}</h5>
                <p class="card-text">${contribution.contribution}</p>
            </div>
        `;
        communityContainer.appendChild(contributionElement);
    });
}
