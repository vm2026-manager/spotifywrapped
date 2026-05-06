const archiveData = [
  {
    year: 2025,
    minutes: 41100,
    topArtist: "Phlake",
    topSong: "come here",
    topGenre: "Dansk pop",
    topPodcast: null,
    topArtists: ["Phlake", "Mike Posner", "Wads", "Stig Rossen", "Khalid"],
    songs: [
      { rank: 1, title: "come here", artist: "Wads" },
      { rank: 2, title: "beast", artist: "Wads" },
      { rank: 3, title: "Under The Influence", artist: "ORA" },
      { rank: 4, title: "Lad Det Ske - Fra Frost", artist: "Maria Lucia" },
      { rank: 5, title: "jukeboxx", artist: "Wads" }
    ]
  },
  {
    year: 2024,
    minutes: 38665,
    podcastMinutes: 16339,
    topArtist: "Phlake",
    topSong: "Krumme's Sang",
    topGenre: "Sport",
    topPodcast: "Mediano",
    topArtists: ["Phlake", "Stig Rossen", "Mercedes the Virus", "Laus Høybye", "ZOO Børneklub"],
    songs: [
      { rank: 1, title: "Krumme's Sang", artist: "Laus Høybye, Krummerne" },
      { rank: 2, title: "Menneskesøn", artist: "Stig Rossen" },
      { rank: 3, title: "Jeg Vil Ha' En Baby", artist: "Anne-Grethe Bjarup Riis, Anders W. Berthelsen" },
      { rank: 4, title: "10 Feet (feat. Gorgeous)", artist: "Phlake, Gorgeous" },
      { rank: 5, title: "Jeg er på vej", artist: "Stig Rossen, Jamie Morton" }
    ]
  },
  {
    year: 2023,
    minutes: 61836,
    topArtist: "Phlake",
    topSong: "T.I.D.O.Y.S.",
    topGenre: null,
    topPodcast: null,
    topArtists: ["Phlake", "Mercedes the Virus", "Dua Lipa", "Ida Laurberg", "Stig Rossen"],
    songs: [
      { rank: 1, title: "T.I.D.O.Y.S.", artist: "Phlake, Mercedes the Virus" },
      { rank: 2, title: "Better Days", artist: "Phlake" },
      { rank: 3, title: "Don’t Start Now", artist: "Dua Lipa" },
      { rank: 4, title: "Jeg Ka' Rigtig Godt Li' Dig", artist: "Ida Laurberg, andreas odbjerg" },
      { rank: 5, title: "Jeg er på vej", artist: "Stig Rossen, Jamie Morton" }
    ]
  },
  {
    year: 2022,
    minutes: 54390,
    topArtist: "Phlake",
    topSong: "2min (feat. Vera)",
    topGenre: "Pop",
    topPodcast: null,
    topArtists: ["Phlake", "Mike Posner", "Norah Jones", "andreas odbjerg", "Kygo"],
    songs: [
      { rank: 1, title: "2min (feat. Vera)", artist: "Phlake, Vera" },
      { rank: 2, title: "hjem fra fabrikken", artist: "andreas odbjerg" },
      { rank: 3, title: "Fra Start", artist: "De Danske Hyrder" },
      { rank: 4, title: "10 Feet", artist: "Phlake" },
      { rank: 5, title: "STOR MAND", artist: "Tobias Rahim, andreas odbjerg" }
    ]
  },
  {
    year: 2021,
    minutes: 60552,
    topArtist: "Mike Posner",
    topSong: "Aliens Need Love Too",
    topGenre: "Tropical house",
    topPodcast: null,
    topArtists: ["Mike Posner", "Phlake", "Justin Bieber", "Khalid", "Zara Larsson"],
    songs: [
      { rank: 1, title: "Aliens Need Love Too", artist: "Phlake, Mercedes the Virus" },
      { rank: 2, title: "Lidt til Lægterne", artist: "P3, Lidt til Lægterne" },
      { rank: 3, title: "RELATIONS", artist: "Felix Sandman, Astrid S" },
      { rank: 4, title: "Over", artist: "Aérotique, Tara Mobee" },
      { rank: 5, title: "Never Meant to Last", artist: "Citna" }
    ]
  },
  {
    year: 2020,
    minutes: null,
    topArtist: "Shalom Dubas",
    topSong: "Something Like This",
    topGenre: null,
    topPodcast: null,
    topArtists: ["Shalom Dubas", "JAYDOT", "Khalid", "andreas odbjerg", "Vera"],
    songs: [
      { rank: 1, title: "Something Like This", artist: "Shalom Dubas, JAYDOT" },
      { rank: 2, title: "Know Your Worth", artist: "Khalid, Disclosure" },
      { rank: 3, title: "føler mig selv 100", artist: "andreas odbjerg" },
      { rank: 4, title: "Antananarivo", artist: "Vera" },
      { rank: 5, title: "All Around Me", artist: "Justin Bieber" }
    ]
  },
  {
    year: 2019,
    minutes: null,
    topArtist: "Mike Posner",
    topSong: "Move On",
    topGenre: null,
    topPodcast: null,
    topArtists: ["Mike Posner", "Mickey", "Chris Brown", "Karl William", "Famous Yesterday"],
    songs: [
      { rank: 1, title: "Move On", artist: "Mike Posner" },
      { rank: 2, title: "Feel It", artist: "Mickey, Theophilus London" },
      { rank: 3, title: "Undecided", artist: "Chris Brown" },
      { rank: 4, title: "Selvom Du", artist: "Karl William" },
      { rank: 5, title: "Make You", artist: "Famous Yesterday" }
    ]
  },
  {
    year: 2018,
    minutes: null,
    topArtist: "Phlake",
    topSong: "New Slow",
    topGenre: null,
    topPodcast: null,
    topArtists: ["Phlake", "Frank Ocean", "Calvin Harris", "Drake", "KESI"],
    songs: [
      { rank: 1, title: "New Slow", artist: "Phlake" },
      { rank: 2, title: "Moon River", artist: "Frank Ocean" },
      { rank: 3, title: "Promises", artist: "Calvin Harris, Sam Smith, Jessie Reyez" },
      { rank: 4, title: "Don’t Matter To Me", artist: "Drake, Michael Jackson" },
      { rank: 5, title: "Kom Over", artist: "KESI" }
    ]
  },
  {
    year: 2017,
    minutes: null,
    topArtist: "Moses: Andreas",
    topSong: "Gazeller",
    topGenre: null,
    topPodcast: null,
    topArtists: ["Moses: Andreas", "Fie Laursen", "Frank Ocean", "Lorde", "Francis and the Lights"],
    songs: [
      { rank: 1, title: "Gazeller", artist: "Moses: Andreas" },
      { rank: 2, title: "Justin", artist: "Fie Laursen" },
      { rank: 3, title: "Biking", artist: "Frank Ocean, JAY-Z, Tyler, The Creator" },
      { rank: 4, title: "Green Light", artist: "Lorde" },
      { rank: 5, title: "May I Have This Dance", artist: "Francis and the Lights, Chance the Rapper" }
    ]
  }
];

const manualImages = {
  artists: {
    "phlake": "https://image-cdn-fa.spotifycdn.com/image/ab67616100005174ca562d7b2a59652b2669433f",
    "mike posner": "https://image-cdn-fa.spotifycdn.com/image/ab676161000051747adb9b4f4a089a65b069e6b9",
    "wads": "https://image-cdn-fa.spotifycdn.com/image/ab67616100005174e7fe2c360e75de8f3610dbf3",
    "stig rossen": "https://i.scdn.co/image/981806636aae9d50937955ea70d7229accdf78e6",
    "khalid": "https://image-cdn-fa.spotifycdn.com/image/ab676161000051748f77c3eddc1869e9542b04bc",
    "justin bieber": "https://image-cdn-fa.spotifycdn.com/image/ab676161000051747e9a06876e8dff502a416d6f",
    "frank ocean": "https://image-cdn-fa.spotifycdn.com/image/ab676161000051747ee3123dfde6ff0dfe5642fb",
    "dua lipa": "https://image-cdn-fa.spotifycdn.com/image/ab67616100005174c36dd9eb55fb0db4911f25dd",
    "calvin harris": "https://image-cdn-fa.spotifycdn.com/image/ab676161000051748ebba5e60113b48de8c11f6b",
    "drake": "https://image-cdn-fa.spotifycdn.com/image/ab676161000051744293385d324db8558179afd9",
    "kygo": "https://image-cdn-fa.spotifycdn.com/image/ab67616100005174814ca09ab2f07b019c5f5f4b",
    "norah jones": "https://image-cdn-fa.spotifycdn.com/image/ab6761610000517487ab7ae985df4ad39af3cc4e",
    "andreas odbjerg": "https://image-cdn-fa.spotifycdn.com/image/ab6761610000517495ec93fdc5c07e75ee33c497",
    "zara larsson": "https://image-cdn-fa.spotifycdn.com/image/ab676161000051746c9a7b87381cd3dcc8a5f65b"
  },
  covers: {
    "come here": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0285c51103eb43960b1a74aced",
    "beast": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02540c73c8616fec8fc10b4c9b",
    "under the influence": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02229f0e3ce1eab83d5a8befb0",
    "lad det ske - fra frost": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0271a8b284ffc0da29d030cb0f",
    "jukeboxx": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0285b2c230c0ae2a5b8b748fa2",
    "krumme's sang": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0255d62964be0d91d3d3ba0201",
    "menneskesøn": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e023417c2e639b79f4a7c0fa905",
    "10 feet (feat. gorgeous)": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02bbf9d3419bd072d7c2483fbe",
    "new slow": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02f6ebbdaf7e16444d10c4e84d",
    "move on": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02be8cf76330e4c079fd2c40e6",
    "2min (feat. vera)": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02bbf9d3419bd072d7c2483fbe",
    "aliens need love too": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ad04bd4fc925827b613218f4",
    "t.i.d.o.y.s.": "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ad04bd4fc925827b613218f4"
  }
};

let selectedYear = 2025;
let minutesChart;
const imageCache = new Map();

const formatNumber = (value) => new Intl.NumberFormat("da-DK").format(value);

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function getInitials(value) {
  return String(value || "?")
    .split(/[ ,.&:()"/-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getPrimaryArtist(artistText) {
  return String(artistText || "").split(",")[0].trim();
}

function getSelectedData() {
  if (selectedYear === "all") return archiveData[0];
  return archiveData.find((item) => item.year === Number(selectedYear)) || archiveData[0];
}

function getManualImage(type, key) {
  return manualImages[type][normalize(key)] || "";
}

async function searchArtwork(type, title, artist = "") {
  const cacheKey = `${type}:${normalize(title)}:${normalize(artist)}`;

  if (imageCache.has(cacheKey)) return imageCache.get(cacheKey);

  const manual =
    type === "artist"
      ? getManualImage("artists", title)
      : getManualImage("covers", title);

  if (manual) {
    imageCache.set(cacheKey, manual);
    return manual;
  }

  const term = type === "artist" ? title : `${title} ${artist}`;
  const entity = type === "artist" ? "musicArtist" : "song";
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&entity=${entity}&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    let image = "";

    if (data.results && data.results[0]) {
      image =
        data.results[0].artworkUrl100 ||
        data.results[0].artworkUrl60 ||
        "";
    }

    if (image) {
      image = image.replace("100x100bb", "300x300bb");
    }

    imageCache.set(cacheKey, image);
    return image;
  } catch {
    imageCache.set(cacheKey, "");
    return "";
  }
}

function imageBox(className, label, type, title, artist = "") {
  const id = `${type}-${Math.random().toString(36).slice(2)}`;

  setTimeout(async () => {
    const element = document.getElementById(id);
    if (!element) return;

    const src = await searchArtwork(type, title, artist);
    if (!src) return;

    element.innerHTML = `<img src="${src}" alt="${label}" loading="lazy" />`;
  }, 0);

  return `<div id="${id}" class="${className}" title="${label}">${getInitials(label)}</div>`;
}

function updateOverview() {
  const item = getSelectedData();

  document.getElementById("currentYear").textContent = item.year;
  document.getElementById("metricArtist").textContent = item.topArtist || "Ikke oplyst";
  document.getElementById("metricSong").textContent = item.topSong || "Ikke oplyst";
  document.getElementById("metricGenre").textContent = item.topGenre || "Ikke oplyst";
  document.getElementById("metricMinutes").textContent =
    typeof item.minutes === "number" ? formatNumber(item.minutes) : "Ikke oplyst";

  document.getElementById("artistTitle").textContent = item.year;
  document.getElementById("songTitle").textContent = item.year;
}

function renderTopArtists() {
  const item = getSelectedData();

  document.getElementById("artistList").innerHTML = item.topArtists.slice(0, 5).map((artist, index) => `
    <div class="rank-row">
      <div class="rank">${index + 1}</div>
      ${imageBox("avatar", artist, "artist", artist)}
      <div>
        <div class="item-title">${artist}</div>
        <div class="item-subtitle">${item.year}</div>
      </div>
      <div class="year-pill">${item.year}</div>
    </div>
  `).join("");
}

function renderTopSongs() {
  const item = getSelectedData();

  document.getElementById("songList").innerHTML = item.songs.slice(0, 5).map((song) => `
    <div class="rank-row">
      <div class="rank">${song.rank}</div>
      ${imageBox("cover", song.title, "track", song.title, song.artist)}
      <div>
        <div class="item-title">${song.title}</div>
        <div class="item-subtitle">${song.artist}</div>
      </div>
      <div class="minutes-pill"></div>
    </div>
  `).join("");
}

function renderYearCards() {
  document.getElementById("yearCards").innerHTML = archiveData.map((item) => `
    <article class="year-card ${Number(selectedYear) === item.year ? "selected" : ""}" data-year="${item.year}">
      <div class="year-card-top">
        <div>
          <p class="section-label">${item.minutes ? "Wrapped" : "Top songs"}</p>
          <div class="year-card-year">${item.year}</div>
        </div>
        <div class="year-card-meta">
          <span>${item.topArtist || "Ikke oplyst"}</span>
          <span>${item.topGenre || "Favoritsange-data"}</span>
          <span>${item.minutes ? `${formatNumber(item.minutes)} min` : "Minutter ikke oplyst"}</span>
        </div>
      </div>

      <div class="year-card-bottom">
        <div class="year-mini-row">
          <span>Sang</span>
          <strong>${item.topSong || "Ikke oplyst"}</strong>
        </div>
        <div class="year-mini-row">
          <span>Genre</span>
          <strong>${item.topGenre || "Ikke oplyst"}</strong>
        </div>
        <div class="year-mini-row">
          <span>Podcast</span>
          <strong>${item.topPodcast || "Ikke oplyst"}</strong>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".year-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedYear = Number(card.dataset.year);
      setActiveYearButton();
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function getArtistRank(yearData, artistName) {
  const primaryArtists = yearData.topArtists.map((artist) => normalize(getPrimaryArtist(artist)));
  const rank = primaryArtists.indexOf(normalize(artistName)) + 1;
  return rank || null;
}

function renderHeatmap() {
  const artists = ["Phlake", "Mike Posner", "Stig Rossen", "Khalid", "Frank Ocean"];
  const years = archiveData.map((item) => item.year);

  const header = `
    <div class="heatmap-row">
      <div class="heatmap-head">År</div>
      ${artists.map((artist) => `<div class="heatmap-head">${artist}</div>`).join("")}
    </div>
  `;

  const rows = years.map((year) => {
    const yearData = archiveData.find((item) => item.year === year);

    return `
      <div class="heatmap-row">
        <div class="heatmap-year">${year}</div>
        ${artists.map((artist) => {
          const rank = getArtistRank(yearData, artist);

          if (!rank) {
            return `<div class="heatmap-cell empty">—</div>`;
          }

          const intensity = rank === 1 ? 0.95 : rank === 2 ? 0.72 : rank === 3 ? 0.55 : 0.38;
          return `<div class="heatmap-cell" style="--intensity: ${intensity}">#${rank}</div>`;
        }).join("")}
      </div>
    `;
  }).join("");

  document.getElementById("artistHeatmap").innerHTML = `<div class="heatmap-table">${header}${rows}</div>`;
}

function getArtistOccurrences() {
  const map = new Map();

  archiveData.forEach((yearData) => {
    yearData.topArtists.forEach((artist, index) => {
      const key = normalize(getPrimaryArtist(artist));

      if (!map.has(key)) {
        map.set(key, {
          name: getPrimaryArtist(artist),
          years: [],
          ranks: []
        });
      }

      map.get(key).years.push(yearData.year);
      map.get(key).ranks.push(index + 1);
    });
  });

  return Array.from(map.values())
    .filter((item) => item.years.length > 1)
    .sort((a, b) => b.years.length - a.years.length || Math.min(...a.ranks) - Math.min(...b.ranks));
}

function getSongOccurrences() {
  const map = new Map();

  archiveData.forEach((yearData) => {
    yearData.songs.forEach((song) => {
      const key = normalize(song.title);

      if (!map.has(key)) {
        map.set(key, {
          title: song.title,
          artist: song.artist,
          years: [],
          ranks: []
        });
      }

      map.get(key).years.push(yearData.year);
      map.get(key).ranks.push(song.rank);
    });
  });

  return Array.from(map.values())
    .filter((item) => item.years.length > 1)
    .sort((a, b) => b.years.length - a.years.length || Math.min(...a.ranks) - Math.min(...b.ranks));
}

function renderRepeats() {
  const artists = getArtistOccurrences().slice(0, 5);
  const songs = getSongOccurrences().slice(0, 5);

  document.getElementById("repeatArtists").innerHTML = artists.map((item) => `
    <article class="repeat-card">
      <h3>${item.name}</h3>
      <div class="badges">
        ${item.years.map((year) => `<span class="badge">${year}</span>`).join("")}
      </div>
      <p class="repeat-note">${item.years.length} år i top 5</p>
    </article>
  `).join("");

  document.getElementById("repeatSongs").innerHTML = songs.map((item) => `
    <article class="repeat-card">
      <h3>${item.title}</h3>
      <div class="badges">
        ${item.years.map((year) => `<span class="badge">${year}</span>`).join("")}
      </div>
      <p class="repeat-note">${item.artist}</p>
    </article>
  `).join("");
}

function renderCompareControls() {
  const fromSelect = document.getElementById("fromYear");
  const toSelect = document.getElementById("toYear");
  const options = archiveData.map((item) => `<option value="${item.year}">${item.year}</option>`).join("");

  fromSelect.innerHTML = options;
  toSelect.innerHTML = options;

  fromSelect.value = "2021";
  toSelect.value = "2025";

  fromSelect.addEventListener("change", renderCompare);
  toSelect.addEventListener("change", renderCompare);
}

function renderCompare() {
  const from = archiveData.find((item) => item.year === Number(document.getElementById("fromYear").value));
  const to = archiveData.find((item) => item.year === Number(document.getElementById("toYear").value));

  const minuteDiff =
    typeof from.minutes === "number" && typeof to.minutes === "number"
      ? to.minutes - from.minutes
      : null;

  const cards = [
    {
      label: "Minutter",
      main: minuteDiff === null ? "Ikke sammenligneligt" : `${minuteDiff >= 0 ? "+" : ""}${formatNumber(minuteDiff)}`,
      sub: `${from.year}: ${from.minutes ? formatNumber(from.minutes) : "—"} → ${to.year}: ${to.minutes ? formatNumber(to.minutes) : "—"}`
    },
    {
      label: "#1-kunstner",
      main: from.topArtist === to.topArtist ? "Uændret" : "Skift",
      sub: `${from.topArtist || "—"} → ${to.topArtist || "—"}`
    },
    {
      label: "Topsang",
      main: from.topSong === to.topSong ? "Uændret" : "Skift",
      sub: `${from.topSong || "—"} → ${to.topSong || "—"}`
    },
    {
      label: "Topgenre",
      main: (from.topGenre || "—") === (to.topGenre || "—") ? "Uændret" : "Ændret",
      sub: `${from.topGenre || "—"} → ${to.topGenre || "—"}`
    }
  ];

  document.getElementById("compareCards").innerHTML = cards.map((card) => `
    <article class="compare-card">
      <span>${card.label}</span>
      <div class="compare-main">${card.main}</div>
      <div class="compare-sub">${card.sub}</div>
    </article>
  `).join("");
}

function renderMinutesChart() {
  const ctx = document.getElementById("minutesChart");
  const data = archiveData
    .filter((item) => typeof item.minutes === "number")
    .sort((a, b) => a.year - b.year);

  if (minutesChart) {
    minutesChart.destroy();
  }

  minutesChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map((item) => item.year),
      datasets: [{
        label: "Minutter",
        data: data.map((item) => item.minutes),
        borderColor: "#1ed760",
        backgroundColor: "rgba(30, 215, 96, 0.16)",
        fill: true,
        tension: 0.35,
        pointRadius: 6,
        pointHoverRadius: 9
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: "index"
      },
      plugins: {
        legend: {
          labels: {
            color: "rgba(246,255,248,0.72)",
            boxWidth: 12,
            boxHeight: 12
          }
        },
        tooltip: {
          backgroundColor: "#06120c",
          titleColor: "#fff",
          bodyColor: "#fff",
          borderColor: "rgba(30,215,96,0.25)",
          borderWidth: 1
        }
      },
      scales: {
        x: {
          ticks: { color: "rgba(246,255,248,0.6)" },
          grid: { color: "rgba(255,255,255,0.05)" }
        },
        y: {
          ticks: { color: "rgba(246,255,248,0.6)" },
          grid: { color: "rgba(255,255,255,0.05)" }
        }
      }
    }
  });
}

function setActiveYearButton() {
  document.querySelectorAll("#yearFilter button").forEach((button) => {
    button.classList.toggle("active", String(button.dataset.year) === String(selectedYear));
  });
}

function setupYearFilter() {
  document.querySelectorAll("#yearFilter button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.year === "all") {
        selectedYear = "all";
        document.getElementById("years").scrollIntoView({ behavior: "smooth" });
      } else {
        selectedYear = Number(button.dataset.year);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      setActiveYearButton();
      renderAll();
    });
  });
}

function renderAll() {
  updateOverview();
  renderTopArtists();
  renderTopSongs();
  renderYearCards();
  renderHeatmap();
  renderRepeats();
  renderCompare();
  renderMinutesChart();
}

setupYearFilter();
renderCompareControls();
renderAll();
