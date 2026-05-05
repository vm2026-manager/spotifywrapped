const wrappedData = [
  {
    year: 2021,
    minutes: 34382,
    topArtist: "Tyler, The Creator",
    topSong: "SWEET / I THOUGHT YOU WANTED TO DANCE",
    topGenre: "Alternative Rock",
    topPodcast: "Genstart",
    topArtists: ["Tyler, The Creator", "The Weeknd", "Tame Impala", "Frank Ocean", "Arctic Monkeys"],
    topSongs: ["SWEET / I THOUGHT YOU WANTED TO DANCE", "Save Your Tears", "The Less I Know The Better", "Pink + White", "Do I Wanna Know?"],
    topGenres: ["Alternative Rock", "Indie Rock", "Pop", "Hip Hop", "R&B"]
  },
  {
    year: 2022,
    minutes: 38910,
    topArtist: "The Weeknd",
    topSong: "Less Than Zero",
    topGenre: "Indie Rock",
    topPodcast: "Bakspejl",
    topArtists: ["The Weeknd", "Tame Impala", "Tyler, The Creator", "Frank Ocean", "Drake"],
    topSongs: ["Less Than Zero", "As It Was", "N95", "Eventually", "Jimmy Cooks"],
    topGenres: ["Indie Rock", "Pop", "Alternative Rock", "Hip Hop", "R&B"]
  },
  {
    year: 2023,
    minutes: 41256,
    topArtist: "Tame Impala",
    topSong: "New Gold",
    topGenre: "Pop",
    topPodcast: "Djævlen i detaljen",
    topArtists: ["Tame Impala", "The Weeknd", "Drake", "Arctic Monkeys", "Frank Ocean"],
    topSongs: ["New Gold", "Creepin'", "Back On 74", "One More Hour", "Sprinter"],
    topGenres: ["Pop", "Hip Hop", "Indie Rock", "Alternative Rock", "Electronic"]
  },
  {
    year: 2024,
    minutes: 49873,
    topArtist: "Tame Impala",
    topSong: "One More Hour",
    topGenre: "Electronic",
    topPodcast: "Messi's World Cup Daily",
    topArtists: ["Tame Impala", "The Weeknd", "Tyler, The Creator", "Arctic Monkeys", "Fred again.."],
    topSongs: ["One More Hour", "adore u", "Not Like Us", "End of Beginning", "places to be"],
    topGenres: ["Electronic", "Pop", "House", "Alternative Rock", "Hip Hop"]
  },
  {
    year: 2025,
    minutes: 47062,
    topArtist: "Tyler, The Creator",
    topSong: "Sticky",
    topGenre: "Pop",
    topPodcast: "Djævlen i detaljen",
    topArtists: ["Tyler, The Creator", "Tame Impala", "The Weeknd", "Fred again..", "Arctic Monkeys"],
    topSongs: ["Sticky", "places to be", "BIRDS OF A FEATHER", "360", "Neverender"],
    topGenres: ["Pop", "Electronic", "House", "Alternative Rock", "R&B"]
  }
];

let selectedYear = "all";
let minutesChart;
let genreChart;

const formatNumber = (value) => new Intl.NumberFormat("da-DK").format(value);

function getFilteredData() {
  if (selectedYear === "all") return wrappedData;
  return wrappedData.filter((item) => String(item.year) === String(selectedYear));
}

function getArtistOccurrences() {
  const map = new Map();

  wrappedData.forEach((yearData) => {
    yearData.topArtists.forEach((artist, index) => {
      if (!map.has(artist)) {
        map.set(artist, {
          artist,
          years: [],
          ranks: []
        });
      }

      const entry = map.get(artist);
      entry.years.push(yearData.year);
      entry.ranks.push(index + 1);
    });
  });

  return Array.from(map.values())
    .filter((entry) => entry.years.length > 1)
    .sort((a, b) => b.years.length - a.years.length || average(a.ranks) - average(b.ranks));
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getMostRepeatedArtist() {
  const occurrences = getArtistOccurrences();
  return occurrences[0];
}

function getTopYear(data) {
  return [...data].sort((a, b) => b.minutes - a.minutes)[0];
}

function updateSummary() {
  const data = getFilteredData();
  const total = data.reduce((sum, item) => sum + item.minutes, 0);
  const avg = Math.round(total / data.length);
  const topYear = getTopYear(data);
  const firstYear = wrappedData[0];
  const lastYear = wrappedData[wrappedData.length - 1];
  const growth = Math.round(((lastYear.minutes - firstYear.minutes) / firstYear.minutes) * 100);
  const repeatedArtist = getMostRepeatedArtist();

  document.getElementById("totalMinutes").textContent = formatNumber(total);
  document.getElementById("averageMinutes").textContent = formatNumber(avg);
  document.getElementById("topYear").textContent = topYear.year;
  document.getElementById("topYearMinutes").textContent = `${formatNumber(topYear.minutes)} minutter`;
  document.getElementById("growthPill").textContent = `${growth >= 0 ? "+" : ""}${growth}% siden 2021`;
  document.getElementById("mostRepeatedArtist").textContent = repeatedArtist ? repeatedArtist.artist : "-";
  document.getElementById("mostRepeatedArtistYears").textContent = repeatedArtist
    ? `${repeatedArtist.years.length} år: ${repeatedArtist.years.join(", ")}`
    : "-";
}

function renderYearLists() {
  const data = getFilteredData();

  renderSimpleYearList("topArtistsByYear", data, "topArtist");
  renderSimpleYearList("topSongsByYear", data, "topSong");
  renderSimpleYearList("topGenresByYear", data, "topGenre");
}

function renderSimpleYearList(elementId, data, key) {
  const container = document.getElementById(elementId);

  container.innerHTML = data.map((item) => `
    <div class="year-row">
      <strong>${item.year}</strong>
      <div>
        <div>${item[key]}</div>
        <span>${key === "topArtist" ? "Årets #1-kunstner" : key === "topSong" ? "Årets topsang" : "Årets topgenre"}</span>
      </div>
    </div>
  `).join("");
}

function renderRepeatArtists() {
  const container = document.getElementById("repeatArtists");
  const occurrences = getArtistOccurrences().slice(0, 5);

  container.innerHTML = occurrences.map((entry) => `
    <article class="repeat-card">
      <h3>${entry.artist}</h3>
      <div class="badges">
        ${entry.years.map((year) => `<span class="badge">${year}</span>`).join("")}
      </div>
      <p class="repeat-count">${entry.years.length} år i top 5</p>
    </article>
  `).join("");
}

function renderYearCards() {
  const container = document.getElementById("yearCards");

  container.innerHTML = wrappedData.map((item) => `
    <article class="year-card ${String(item.year) === String(selectedYear) ? "selected" : ""}" data-year="${item.year}">
      <div class="year">${item.year}</div>
      <dl>
        <div>
          <dt>Minutter</dt>
          <dd>${formatNumber(item.minutes)}</dd>
        </div>
        <div>
          <dt>Topkunstner</dt>
          <dd>${item.topArtist}</dd>
        </div>
        <div>
          <dt>Topsang</dt>
          <dd>${item.topSong}</dd>
        </div>
        <div>
          <dt>Topgenre</dt>
          <dd>${item.topGenre}</dd>
        </div>
      </dl>
    </article>
  `).join("");

  document.querySelectorAll(".year-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedYear = card.dataset.year;
      setActiveYearButton();
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderHeatmap() {
  const container = document.getElementById("artistHeatmap");
  const artists = Array.from(new Set(wrappedData.flatMap((item) => item.topArtists))).slice(0, 8);

  const rows = wrappedData.map((yearData) => {
    const cells = artists.map((artist) => {
      const rank = yearData.topArtists.indexOf(artist) + 1;
      const intensity = rank === 0 ? 0.06 : 0.22 + ((6 - rank) * 0.12);
      const title = rank === 0 ? `${artist}: ikke i top 5` : `${artist}: #${rank}`;
      return `<div class="heatmap-cell" title="${title}" style="--intensity: ${intensity}"></div>`;
    }).join("");

    return `
      <div class="heatmap-row">
        <div class="heatmap-year">${yearData.year}</div>
        ${cells}
      </div>
    `;
  }).join("");

  const labels = `
    <div class="heatmap-labels">
      <div></div>
      ${artists.map((artist) => `<div class="heatmap-label">${artist}</div>`).join("")}
    </div>
  `;

  container.innerHTML = rows + labels;
}

function renderCompareControls() {
  const fromSelect = document.getElementById("fromYear");
  const toSelect = document.getElementById("toYear");

  const options = wrappedData.map((item) => `<option value="${item.year}">${item.year}</option>`).join("");

  fromSelect.innerHTML = options;
  toSelect.innerHTML = options;

  fromSelect.value = "2021";
  toSelect.value = "2025";

  fromSelect.addEventListener("change", renderCompareCards);
  toSelect.addEventListener("change", renderCompareCards);

  renderCompareCards();
}

function renderCompareCards() {
  const fromYear = Number(document.getElementById("fromYear").value);
  const toYear = Number(document.getElementById("toYear").value);
  const from = wrappedData.find((item) => item.year === fromYear);
  const to = wrappedData.find((item) => item.year === toYear);
  const diff = to.minutes - from.minutes;
  const container = document.getElementById("compareCards");

  const cards = [
    {
      title: "Minutter",
      old: `${from.year}: ${formatNumber(from.minutes)}`,
      value: `${diff >= 0 ? "+" : ""}${formatNumber(diff)}`,
      newValue: `${to.year}: ${formatNumber(to.minutes)}`
    },
    {
      title: "#1-kunstner",
      old: `${from.year}: ${from.topArtist}`,
      value: from.topArtist === to.topArtist ? "Samme" : "Skift",
      newValue: `${to.year}: ${to.topArtist}`
    },
    {
      title: "Topsang",
      old: `${from.year}: ${from.topSong}`,
      value: from.topSong === to.topSong ? "Samme" : "Ny sang",
      newValue: `${to.year}: ${to.topSong}`
    },
    {
      title: "Topgenre",
      old: `${from.year}: ${from.topGenre}`,
      value: from.topGenre === to.topGenre ? "Samme" : "Ændret",
      newValue: `${to.year}: ${to.topGenre}`
    },
    {
      title: "Toppodcast",
      old: `${from.year}: ${from.topPodcast}`,
      value: from.topPodcast === to.topPodcast ? "Samme" : "Ændret",
      newValue: `${to.year}: ${to.topPodcast}`
    }
  ];

  container.innerHTML = cards.map((card) => `
    <article class="compare-card">
      <p class="section-label">${card.title}</p>
      <p class="old">${card.old}</p>
      <div class="value">${card.value}</div>
      <p class="old">${card.newValue}</p>
    </article>
  `).join("");
}

function renderMinutesChart() {
  const ctx = document.getElementById("minutesChart");
  const data = getFilteredData();

  if (minutesChart) minutesChart.destroy();

  minutesChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map((item) => item.year),
      datasets: [{
        label: "Minutter",
        data: data.map((item) => item.minutes),
        borderColor: "#1ed760",
        backgroundColor: "rgba(30, 215, 96, 0.18)",
        fill: true,
        tension: 0.35,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: getChartOptions()
  });
}

function renderGenreChart() {
  const ctx = document.getElementById("genreChart");
  const genres = Array.from(new Set(wrappedData.flatMap((item) => item.topGenres))).slice(0, 7);

  const datasets = genres.map((genre, index) => ({
    label: genre,
    data: wrappedData.map((item) => {
      const rank = item.topGenres.indexOf(genre);
      return rank === -1 ? 0 : 6 - rank;
    }),
    backgroundColor: [
      "rgba(30, 215, 96, 0.75)",
      "rgba(255, 79, 154, 0.75)",
      "rgba(155, 92, 255, 0.75)",
      "rgba(255, 122, 51, 0.75)",
      "rgba(56, 217, 255, 0.75)",
      "rgba(255, 210, 64, 0.75)",
      "rgba(180, 180, 180, 0.55)"
    ][index]
  }));

  if (genreChart) genreChart.destroy();

  genreChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: wrappedData.map((item) => item.year),
      datasets
    },
    options: {
      ...getChartOptions(),
      scales: {
        x: {
          stacked: true,
          ticks: { color: "rgba(255,255,255,0.65)" },
          grid: { color: "rgba(255,255,255,0.05)" }
        },
        y: {
          stacked: true,
          ticks: { color: "rgba(255,255,255,0.65)" },
          grid: { color: "rgba(255,255,255,0.05)" }
        }
      }
    }
  });
}

function getChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "rgba(255,255,255,0.75)",
          boxWidth: 12,
          boxHeight: 12
        }
      },
      tooltip: {
        backgroundColor: "#101719",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(255,255,255,0.12)",
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: { color: "rgba(255,255,255,0.65)" },
        grid: { color: "rgba(255,255,255,0.05)" }
      },
      y: {
        ticks: { color: "rgba(255,255,255,0.65)" },
        grid: { color: "rgba(255,255,255,0.05)" }
      }
    }
  };
}

function setActiveYearButton() {
  document.querySelectorAll("#yearFilter button").forEach((button) => {
    button.classList.toggle("active", button.dataset.year === String(selectedYear));
  });
}

function setupYearFilter() {
  document.querySelectorAll("#yearFilter button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedYear = button.dataset.year;
      setActiveYearButton();
      renderAll();
    });
  });
}

function renderAll() {
  updateSummary();
  renderYearLists();
  renderRepeatArtists();
  renderYearCards();
  renderHeatmap();
  renderMinutesChart();
  renderGenreChart();
}

setupYearFilter();
renderCompareControls();
renderAll();
