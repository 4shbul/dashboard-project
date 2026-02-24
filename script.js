const TASK_STORAGE_PREFIX = "taskflow_pro_v2";
    const IG_STORAGE_PREFIX = "taskflow_ig_posts_v1";
    const IG_PUZZLE_STORAGE_PREFIX = "taskflow_ig_puzzle_v1";
    const FINANCE_STORAGE_PREFIX = "taskflow_finance_v1";
    const PROFILE_STORAGE_PREFIX = "taskflow_profile_v1";
    const USERS_STORAGE_KEY = "taskflow_users_v1";
    const SESSION_STORAGE_KEY = "taskflow_session_v1";
    const STATUS_ORDER = ["To Do", "In Progress", "Review", "Done"];
    const PRIORITY_ORDER = { High: 1, Medium: 2, Low: 3 };
    const DESIGN_REPORT_THRESHOLD = 5;
    const DESIGN_PROJECT_NEW_DAYS = 7;
    const IG_WEEKLY_TARGET = 5;
    const IG_PUZZLE_MAX_IMAGES = 30;
    const IG_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const IG_DAY_LABEL = {
      Monday: "Senin",
      Tuesday: "Selasa",
      Wednesday: "Rabu",
      Thursday: "Kamis",
      Friday: "Jumat",
      Saturday: "Sabtu",
      Sunday: "Minggu"
    };
    const IG_DEFAULT_SLOTS = {
      Monday: ["11:30", "19:00"],
      Tuesday: ["12:00", "19:30"],
      Wednesday: ["11:30", "20:00"],
      Thursday: ["12:00", "19:00"],
      Friday: ["11:30", "18:30"],
      Saturday: ["09:30", "19:00"],
      Sunday: ["10:00", "19:30"]
    };

    const refs = {
      authApp: document.getElementById("authApp"),
      authCard: document.getElementById("authCard"),
      dashboardApp: document.getElementById("dashboardApp"),
      financeDashboardApp: document.getElementById("financeDashboardApp"),
      showLoginTab: document.getElementById("showLoginTab"),
      showSignupTab: document.getElementById("showSignupTab"),
      loginForm: document.getElementById("loginForm"),
      signupForm: document.getElementById("signupForm"),
      authMessage: document.getElementById("authMessage"),
      loginEmail: document.getElementById("loginEmail"),
      loginPassword: document.getElementById("loginPassword"),
      loginTargetDashboard: document.getElementById("loginTargetDashboard"),
      showResetPassword: document.getElementById("showResetPassword"),
      resetForm: document.getElementById("resetForm"),
      resetEmail: document.getElementById("resetEmail"),
      resetPassword: document.getElementById("resetPassword"),
      resetPasswordConfirm: document.getElementById("resetPasswordConfirm"),
      backToLoginFromReset: document.getElementById("backToLoginFromReset"),
      signupName: document.getElementById("signupName"),
      signupEmail: document.getElementById("signupEmail"),
      signupPassword: document.getElementById("signupPassword"),
      signupPasswordConfirm: document.getElementById("signupPasswordConfirm"),
      activeUserLabel: document.getElementById("activeUserLabel"),
      logoutBtn: document.getElementById("logoutBtn"),
      financeActiveUserLabel: document.getElementById("financeActiveUserLabel"),
      financeLogoutBtn: document.getElementById("financeLogoutBtn"),
      financeClock: document.getElementById("financeClock"),
      financeBalanceChip: document.getElementById("financeBalanceChip"),
      financeExpenseChip: document.getElementById("financeExpenseChip"),
      financeIncomeKpi: document.getElementById("financeIncomeKpi"),
      financeExpenseKpi: document.getElementById("financeExpenseKpi"),
      financeNetKpi: document.getElementById("financeNetKpi"),
      financeSavingRateKpi: document.getElementById("financeSavingRateKpi"),
      financeForm: document.getElementById("financeForm"),
      financeDate: document.getElementById("financeDate"),
      financeType: document.getElementById("financeType"),
      financeCategory: document.getElementById("financeCategory"),
      financeMethod: document.getElementById("financeMethod"),
      financeAmount: document.getElementById("financeAmount"),
      financeNote: document.getElementById("financeNote"),
      financeSeedDemo: document.getElementById("financeSeedDemo"),
      financeClearAll: document.getElementById("financeClearAll"),
      financeMonth: document.getElementById("financeMonth"),
      financeMonthMeta: document.getElementById("financeMonthMeta"),
      financeSearch: document.getElementById("financeSearch"),
      financeFilterType: document.getElementById("financeFilterType"),
      financeFilterMethod: document.getElementById("financeFilterMethod"),
      financeBody: document.getElementById("financeBody"),
      mobileFinanceList: document.getElementById("mobileFinanceList"),
      profileForm: document.getElementById("profileForm"),
      profileAvatar: document.getElementById("profileAvatar"),
      profileDisplayName: document.getElementById("profileDisplayName"),
      profileDisplayRole: document.getElementById("profileDisplayRole"),
      profileName: document.getElementById("profileName"),
      profileEmail: document.getElementById("profileEmail"),
      profileRole: document.getElementById("profileRole"),
      profileDepartment: document.getElementById("profileDepartment"),
      profilePhone: document.getElementById("profilePhone"),
      profileBio: document.getElementById("profileBio"),
      saveProfileBtn: document.getElementById("saveProfileBtn"),
      profileSaveStatus: document.getElementById("profileSaveStatus"),
      clock: document.getElementById("clock"),
      urgentCount: document.getElementById("urgentCount"),
      overdueCount: document.getElementById("overdueCount"),
      activeViewText: document.getElementById("activeViewText"),
      taskForm: document.getElementById("taskForm"),
      title: document.getElementById("title"),
      type: document.getElementById("type"),
      priority: document.getElementById("priority"),
      status: document.getElementById("status"),
      dueDate: document.getElementById("dueDate"),
      estimateHours: document.getElementById("estimateHours"),
      actualHours: document.getElementById("actualHours"),
      notes: document.getElementById("notes"),
      seedDemo: document.getElementById("seedDemo"),
      progressText: document.getElementById("progressText"),
      progressBar: document.getElementById("progressBar"),
      progressMeta: document.getElementById("progressMeta"),
      reportMeta: document.getElementById("reportMeta"),
      doneOnlyReport: document.getElementById("doneOnlyReport"),
      waPreview: document.getElementById("waPreview"),
      designGroupCount: document.getElementById("designGroupCount"),
      designGroupList: document.getElementById("designGroupList"),
      designGroupHint: document.getElementById("designGroupHint"),
      copyWaReport: document.getElementById("copyWaReport"),
      openWaReport: document.getElementById("openWaReport"),
      waStatus: document.getElementById("waStatus"),
      igForm: document.getElementById("igForm"),
      igDate: document.getElementById("igDate"),
      igTime: document.getElementById("igTime"),
      igContentType: document.getElementById("igContentType"),
      igReach: document.getElementById("igReach"),
      igLikes: document.getElementById("igLikes"),
      igComments: document.getElementById("igComments"),
      igShares: document.getElementById("igShares"),
      igSaves: document.getElementById("igSaves"),
      igRealtimeCard: document.getElementById("igRealtimeCard"),
      igRealtimeTitle: document.getElementById("igRealtimeTitle"),
      igRealtimeCountdown: document.getElementById("igRealtimeCountdown"),
      igRealtimeMeta: document.getElementById("igRealtimeMeta"),
      igTopSlots: document.getElementById("igTopSlots"),
      igConsistency: document.getElementById("igConsistency"),
      igInsights: document.getElementById("igInsights"),
      igTimeline: document.getElementById("igTimeline"),
      igPuzzleUpload: document.getElementById("igPuzzleUpload"),
      igPuzzleGrid: document.getElementById("igPuzzleGrid"),
      igPuzzleCount: document.getElementById("igPuzzleCount"),
      igPuzzleHint: document.getElementById("igPuzzleHint"),
      clearIgPuzzle: document.getElementById("clearIgPuzzle"),
      seedIgData: document.getElementById("seedIgData"),
      clearIgData: document.getElementById("clearIgData"),
      exportJson: document.getElementById("exportJson"),
      importJson: document.getElementById("importJson"),
      importFile: document.getElementById("importFile"),
      clearAll: document.getElementById("clearAll"),
      searchInput: document.getElementById("searchInput"),
      filterType: document.getElementById("filterType"),
      filterStatus: document.getElementById("filterStatus"),
      filterPriority: document.getElementById("filterPriority"),
      tableBtn: document.getElementById("tableBtn"),
      kanbanBtn: document.getElementById("kanbanBtn"),
      tableView: document.getElementById("tableView"),
      kanbanView: document.getElementById("kanbanView"),
      taskBody: document.getElementById("taskBody"),
      mobileTaskList: document.getElementById("mobileTaskList"),
      doneRing: document.getElementById("doneRing"),
      insDone: document.getElementById("insDone"),
      insPending: document.getElementById("insPending"),
      webTotal: document.getElementById("webTotal"),
      webDone: document.getElementById("webDone"),
      webProgress: document.getElementById("webProgress"),
      designTotal: document.getElementById("designTotal"),
      designDone: document.getElementById("designDone"),
      designProgress: document.getElementById("designProgress"),
      kpiTotal: document.getElementById("kpiTotal"),
      kpiDone: document.getElementById("kpiDone"),
      kpiProgress: document.getElementById("kpiProgress"),
      kpiEstimate: document.getElementById("kpiEstimate"),
      kpiActual: document.getElementById("kpiActual"),
      kpiEfficiency: document.getElementById("kpiEfficiency")
    };

    let tasks = [];
    let igPosts = [];
    let igPuzzleImages = [];
    let financeEntries = [];
    let activeView = "table";
    let activeDashboard = "tasks";
    let currentUser = null;
    let currentProfile = null;
    let igPuzzleDragId = "";

    function normalizeTask(raw) {
      return {
        id: raw.id || crypto.randomUUID(),
        title: String(raw.title || "").trim(),
        type: raw.type === "Graphic Design" ? "Graphic Design" : "Web Development",
        priority: ["High", "Medium", "Low"].includes(raw.priority) ? raw.priority : "Medium",
        status: STATUS_ORDER.includes(raw.status) ? raw.status : "To Do",
        dueDate: raw.dueDate || "",
        estimateHours: Number(raw.estimateHours) || 0,
        actualHours: Number(raw.actualHours) || 0,
        notes: String(raw.notes || ""),
        createdAt: raw.createdAt || new Date().toISOString(),
        completedAt: raw.completedAt || ""
      };
    }

    function normalizeEmail(email) {
      return String(email || "").trim().toLowerCase();
    }

    function getTaskStorageKey(email) {
      return `${TASK_STORAGE_PREFIX}_${normalizeEmail(email)}`;
    }

    function getIGStorageKey(email) {
      return `${IG_STORAGE_PREFIX}_${normalizeEmail(email)}`;
    }

    function getIGPuzzleStorageKey(email) {
      return `${IG_PUZZLE_STORAGE_PREFIX}_${normalizeEmail(email)}`;
    }

    function getFinanceStorageKey(email) {
      return `${FINANCE_STORAGE_PREFIX}_${normalizeEmail(email)}`;
    }

    function getProfileStorageKey(email) {
      return `${PROFILE_STORAGE_PREFIX}_${normalizeEmail(email)}`;
    }

    function normalizeFinanceEntry(raw) {
      const kind = raw.kind === "Expense" ? "Expense" : "Income";
      return {
        id: raw.id || crypto.randomUUID(),
        date: String(raw.date || new Date().toISOString().slice(0, 10)),
        kind,
        category: String(raw.category || "").trim() || (kind === "Income" ? "Pemasukan Lainnya" : "Pengeluaran Lainnya"),
        method: String(raw.method || "Bank Transfer").trim(),
        amount: Math.max(0, Number(raw.amount) || 0),
        note: String(raw.note || "").trim(),
        createdAt: raw.createdAt || new Date().toISOString()
      };
    }

    function defaultProfileFromUser(user) {
      const baseName = String(user && user.name ? user.name : user && user.email ? user.email : "User").trim();
      return {
        name: baseName,
        email: normalizeEmail(user && user.email ? user.email : ""),
        role: "",
        department: "",
        phone: "",
        bio: "",
        updatedAt: ""
      };
    }

    function getInitials(name) {
      const parts = String(name || "")
        .trim()
        .split(/\s+/)
        .filter(Boolean);
      if (!parts.length) return "U";
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }

    function setProfileStatus(message, type) {
      refs.profileSaveStatus.textContent = message || "";
      if (type === "error") {
        refs.profileSaveStatus.style.color = "var(--danger)";
      } else if (type === "success") {
        refs.profileSaveStatus.style.color = "var(--done)";
      } else {
        refs.profileSaveStatus.style.color = "var(--muted)";
      }
    }

    function renderProfileHeader(profile) {
      const safeName = String(profile && profile.name ? profile.name : currentUser ? currentUser.email : "User").trim();
      const roleText = String(profile && profile.role ? profile.role : "").trim();
      refs.profileDisplayName.textContent = safeName;
      refs.profileDisplayRole.textContent = roleText || "Role belum diatur";
      refs.profileAvatar.textContent = getInitials(safeName);
      if (currentUser) {
        refs.activeUserLabel.textContent = `${safeName} (${currentUser.email})`;
        refs.financeActiveUserLabel.textContent = `${safeName} (${currentUser.email})`;
      }
    }

    function fillProfileForm(profile) {
      refs.profileName.value = profile.name || "";
      refs.profileEmail.value = profile.email || "";
      refs.profileRole.value = profile.role || "";
      refs.profileDepartment.value = profile.department || "";
      refs.profilePhone.value = profile.phone || "";
      refs.profileBio.value = profile.bio || "";
      renderProfileHeader(profile);
    }

    function loadUserProfile(user) {
      const defaults = defaultProfileFromUser(user);
      try {
        const raw = localStorage.getItem(getProfileStorageKey(defaults.email));
        if (!raw) return defaults;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return defaults;
        return {
          ...defaults,
          ...parsed,
          email: defaults.email
        };
      } catch (_) {
        return defaults;
      }
    }

    function saveCurrentProfile(showFeedback) {
      if (!currentUser) return;
      const name = String(refs.profileName.value || "").trim();
      if (!name) {
        setProfileStatus("Nama lengkap wajib diisi.", "error");
        return;
      }

      const profile = {
        name,
        email: normalizeEmail(currentUser.email),
        role: String(refs.profileRole.value || "").trim(),
        department: String(refs.profileDepartment.value || "").trim(),
        phone: String(refs.profilePhone.value || "").trim(),
        bio: String(refs.profileBio.value || "").trim(),
        updatedAt: new Date().toISOString()
      };

      currentProfile = profile;
      localStorage.setItem(getProfileStorageKey(profile.email), JSON.stringify(profile));

      const users = loadUsers();
      const idx = users.findIndex(u => normalizeEmail(u.email) === profile.email);
      if (idx >= 0) {
        users[idx].name = profile.name;
        saveUsers(users);
      }

      if (currentUser) currentUser.name = profile.name;
      renderProfileHeader(profile);
      if (showFeedback) {
        setProfileStatus("Profil berhasil disimpan. Data tetap tersimpan saat logout.", "success");
      }
    }

    function normalizeIGPost(raw) {
      return {
        id: raw.id || crypto.randomUUID(),
        date: String(raw.date || ""),
        time: String(raw.time || "12:00"),
        contentType: String(raw.contentType || "Reels"),
        reach: Math.max(1, Number(raw.reach) || 1),
        likes: Math.max(0, Number(raw.likes) || 0),
        comments: Math.max(0, Number(raw.comments) || 0),
        shares: Math.max(0, Number(raw.shares) || 0),
        saves: Math.max(0, Number(raw.saves) || 0),
        createdAt: raw.createdAt || new Date().toISOString()
      };
    }

    function normalizeIGPuzzleItem(raw) {
      const url = String(raw && raw.url ? raw.url : "").trim();
      if (!url) return null;
      return {
        id: raw && raw.id ? raw.id : crypto.randomUUID(),
        name: String(raw && raw.name ? raw.name : "IG Image"),
        url,
        createdAt: raw && raw.createdAt ? raw.createdAt : new Date().toISOString()
      };
    }

    function loadIGPosts(email) {
      try {
        const raw = localStorage.getItem(getIGStorageKey(email));
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (_) {
        return [];
      }
    }

    function saveIGPosts() {
      if (!currentUser) return;
      localStorage.setItem(getIGStorageKey(currentUser.email), JSON.stringify(igPosts));
    }

    function loadIGPuzzleImages(email) {
      try {
        const raw = localStorage.getItem(getIGPuzzleStorageKey(email));
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
          .map(normalizeIGPuzzleItem)
          .filter(Boolean)
          .slice(0, IG_PUZZLE_MAX_IMAGES);
      } catch (_) {
        return [];
      }
    }

    function saveIGPuzzleImages() {
      if (!currentUser) return false;
      try {
        localStorage.setItem(getIGPuzzleStorageKey(currentUser.email), JSON.stringify(igPuzzleImages));
        return true;
      } catch (_) {
        refs.igPuzzleHint.textContent = "Gagal menyimpan gambar puzzle. Penyimpanan browser mungkin penuh.";
        return false;
      }
    }

    function readFileAsDataUrl(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.onload = function () {
          resolve(String(reader.result || ""));
        };
        reader.onerror = function () {
          reject(new Error("read_failed"));
        };
        reader.readAsDataURL(file);
      });
    }

    function revokeIGPuzzleImageUrl(item) {
      if (!item || !item.url) return;
      if (String(item.url).startsWith("blob:")) {
        URL.revokeObjectURL(item.url);
      }
    }

    function clearIGPuzzleDragState() {
      igPuzzleDragId = "";
      if (!refs.igPuzzleGrid) return;
      refs.igPuzzleGrid.querySelectorAll(".ig-puzzle-item.dragging, .ig-puzzle-item.drop-target").forEach(function (el) {
        el.classList.remove("dragging", "drop-target");
      });
    }

    function swapIGPuzzleImages(fromIndex, toIndex) {
      if (fromIndex === toIndex) return false;
      if (fromIndex < 0 || toIndex < 0) return false;
      if (fromIndex >= igPuzzleImages.length || toIndex >= igPuzzleImages.length) return false;
      const temp = igPuzzleImages[fromIndex];
      igPuzzleImages[fromIndex] = igPuzzleImages[toIndex];
      igPuzzleImages[toIndex] = temp;
      renderIGPuzzleGrid();
      saveIGPuzzleImages();
      return true;
    }

    function moveIGPuzzleImageById(sourceId, targetId) {
      const fromIndex = igPuzzleImages.findIndex(function (item) {
        return item.id === sourceId;
      });
      const toIndex = igPuzzleImages.findIndex(function (item) {
        return item.id === targetId;
      });
      return swapIGPuzzleImages(fromIndex, toIndex);
    }

    function moveIGPuzzleImageByOffset(id, offset) {
      const fromIndex = igPuzzleImages.findIndex(function (item) {
        return item.id === id;
      });
      if (fromIndex < 0) return false;
      const toIndex = fromIndex + Number(offset || 0);
      return swapIGPuzzleImages(fromIndex, toIndex);
    }

    function renderIGPuzzleGrid() {
      if (!refs.igPuzzleGrid) return;
      const imageCount = igPuzzleImages.length;
      refs.igPuzzleCount.textContent = `${imageCount} gambar`;

      if (!imageCount) {
        refs.igPuzzleGrid.innerHTML = Array.from({ length: 9 }, function () {
          return "<div class='ig-puzzle-placeholder' aria-hidden='true'></div>";
        }).join("");
        refs.igPuzzleHint.textContent = "Belum ada gambar. Upload beberapa gambar untuk preview puzzle.";
        return;
      }

      const imageHtml = igPuzzleImages.map(function (item, idx) {
        const name = item.name ? ` title="${escapeHtml(item.name)}"` : "";
        const disablePrev = idx === 0 ? " disabled" : "";
        const disableNext = idx === imageCount - 1 ? " disabled" : "";
        return `
          <article class="ig-puzzle-item" data-ig-puzzle-id="${item.id}" draggable="true"${name}>
            <img src="${item.url}" alt="Preview puzzle ${idx + 1}" loading="lazy">
            <div class="ig-puzzle-actions">
              <button class="ig-puzzle-move" type="button" data-ig-puzzle-move="prev" data-ig-puzzle-id="${item.id}" aria-label="Geser gambar ke kiri"${disablePrev}>&lt;</button>
              <button class="ig-puzzle-move" type="button" data-ig-puzzle-move="next" data-ig-puzzle-id="${item.id}" aria-label="Geser gambar ke kanan"${disableNext}>&gt;</button>
            </div>
            <button class="ig-puzzle-remove" type="button" data-ig-puzzle-remove="${item.id}" aria-label="Hapus gambar">x</button>
            <span class="ig-puzzle-index">#${idx + 1}</span>
          </article>
        `;
      }).join("");
      const placeholderCount = Math.max(0, 9 - imageCount);
      const placeholderHtml = Array.from({ length: placeholderCount }, function () {
        return "<div class='ig-puzzle-placeholder' aria-hidden='true'></div>";
      }).join("");

      refs.igPuzzleGrid.innerHTML = imageHtml + placeholderHtml;
      refs.igPuzzleHint.textContent = imageCount >= 9
        ? "Puzzle siap. Geser gambar dengan drag-drop atau tombol < > untuk atur urutan."
        : "Upload lalu atur urutan gambar. Lengkapi hingga 9 gambar untuk lihat puzzle 3x3 penuh.";
    }

    async function addIGPuzzleImages(fileList) {
      if (!fileList || !fileList.length) return;

      const validImages = Array.from(fileList).filter(function (file) {
        return String(file && file.type ? file.type : "").startsWith("image/");
      });

      if (!validImages.length) {
        refs.igPuzzleHint.textContent = "File yang dipilih bukan gambar.";
        return;
      }

      const remainingSlots = IG_PUZZLE_MAX_IMAGES - igPuzzleImages.length;
      if (remainingSlots <= 0) {
        refs.igPuzzleHint.textContent = `Maksimal ${IG_PUZZLE_MAX_IMAGES} gambar. Hapus beberapa gambar dulu.`;
        return;
      }

      const selectedImages = validImages.slice(0, remainingSlots);
      refs.igPuzzleHint.textContent = "Memproses gambar...";
      try {
        const newItems = await Promise.all(selectedImages.map(async function (file) {
          const dataUrl = await readFileAsDataUrl(file);
          return {
            id: crypto.randomUUID(),
            name: String(file.name || "IG Image"),
            url: dataUrl,
            createdAt: new Date().toISOString()
          };
        }));

        igPuzzleImages = newItems.concat(igPuzzleImages);
        renderIGPuzzleGrid();
        saveIGPuzzleImages();
      } catch (_) {
        refs.igPuzzleHint.textContent = "Gagal memproses gambar. Coba file lain.";
        return;
      }

      if (validImages.length > selectedImages.length) {
        refs.igPuzzleHint.textContent = `Sebagian gambar dilewati karena batas maksimal ${IG_PUZZLE_MAX_IMAGES} gambar.`;
      }
    }

    function removeIGPuzzleImageById(id) {
      const idx = igPuzzleImages.findIndex(function (item) {
        return item.id === id;
      });
      if (idx < 0) return;
      const [removed] = igPuzzleImages.splice(idx, 1);
      revokeIGPuzzleImageUrl(removed);
      renderIGPuzzleGrid();
      saveIGPuzzleImages();
    }

    function clearIGPuzzleImages(withConfirm, shouldPersist) {
      const shouldAsk = withConfirm !== false;
      const saveAfterClear = shouldPersist !== false;
      if (shouldAsk && igPuzzleImages.length && !confirm("Hapus semua gambar puzzle feed?")) return false;
      igPuzzleImages.forEach(revokeIGPuzzleImageUrl);
      igPuzzleImages = [];
      clearIGPuzzleDragState();
      renderIGPuzzleGrid();
      if (saveAfterClear) saveIGPuzzleImages();
      return true;
    }

    function getIGDayFromDate(dateStr) {
      if (!dateStr) return "Monday";
      const d = new Date(dateStr + "T00:00:00");
      if (Number.isNaN(d.getTime())) return "Monday";
      const map = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return map[d.getDay()] || "Monday";
    }

    function computeIGEngagementRate(post) {
      const reach = Math.max(1, Number(post.reach) || 1);
      const interactions =
        (Number(post.likes) || 0) +
        (Number(post.comments) || 0) * 2 +
        (Number(post.shares) || 0) * 3 +
        (Number(post.saves) || 0) * 3;
      return (interactions / reach) * 100;
    }

    function getInstagramTimelineAnalytics() {
      const aggregates = {};
      const perDay = {};

      for (const post of igPosts) {
        const day = getIGDayFromDate(post.date);
        const time = String(post.time || "12:00").slice(0, 5);
        const score = computeIGEngagementRate(post);
        const key = `${day}|${time}`;
        if (!aggregates[key]) {
          aggregates[key] = { day, time, total: 0, count: 0 };
        }
        aggregates[key].total += score;
        aggregates[key].count += 1;
      }

      const slotStats = Object.values(aggregates).map(s => ({
        ...s,
        avg: s.count ? s.total / s.count : 0
      })).sort((a, b) => b.avg - a.avg);

      for (const stat of slotStats) {
        if (!perDay[stat.day]) perDay[stat.day] = [];
        perDay[stat.day].push(stat);
      }

      const topSlots = slotStats.slice(0, 3);
      const weekPlan = IG_DAYS.map(day => {
        const best = perDay[day] && perDay[day][0] ? perDay[day][0] : null;
        const fallback = IG_DEFAULT_SLOTS[day] || ["12:00", "19:00"];
        const secondaryData = perDay[day] && perDay[day][1] ? perDay[day][1].time : null;
        return {
          day,
          label: IG_DAY_LABEL[day] || day,
          primary: best ? best.time : fallback[0],
          secondary: secondaryData || fallback[1],
          source: best ? "Data" : "Baseline"
        };
      });

      const avgRate = igPosts.length
        ? igPosts.reduce((sum, p) => sum + computeIGEngagementRate(p), 0) / igPosts.length
        : 0;

      return { weekPlan, topSlots, avgRate };
    }

    function getJsDayFromIGDay(day) {
      const map = {
        Sunday: 0,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6
      };
      return map[day] ?? 1;
    }

    function getWeekStart(date) {
      const d = new Date(date);
      const jsDay = d.getDay();
      const diff = jsDay === 0 ? -6 : 1 - jsDay;
      d.setDate(d.getDate() + diff);
      d.setHours(0, 0, 0, 0);
      return d;
    }

    function getWeekEnd(date) {
      const start = getWeekStart(date);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      end.setHours(23, 59, 59, 999);
      return end;
    }

    function getWeeklyPostCount(date) {
      const start = getWeekStart(date);
      const end = getWeekEnd(date);
      return igPosts.filter(post => {
        if (!post.date) return false;
        const t = new Date(post.date + "T12:00:00").getTime();
        return t >= start.getTime() && t <= end.getTime();
      }).length;
    }

    function buildSlotDateTime(day, time, fromDate) {
      const targetDay = getJsDayFromIGDay(day);
      const [h, m] = String(time || "12:00").split(":").map(Number);
      const base = new Date(fromDate);
      const offset = (targetDay - base.getDay() + 7) % 7;
      const candidate = new Date(base);
      candidate.setDate(base.getDate() + offset);
      candidate.setHours(Number.isFinite(h) ? h : 12, Number.isFinite(m) ? m : 0, 0, 0);
      return candidate;
    }

    function getNextUploadSlot(weekPlan, now) {
      let next = null;
      for (const daySlot of weekPlan) {
        for (const slotType of ["primary", "secondary"]) {
          const time = daySlot[slotType];
          const candidate = buildSlotDateTime(daySlot.day, time, now);
          let candidateTs = candidate.getTime();
          if (candidateTs < now.getTime()) {
            candidate.setDate(candidate.getDate() + 7);
            candidateTs = candidate.getTime();
          }
          if (!next || candidateTs < next.when.getTime()) {
            next = {
              day: daySlot.day,
              label: daySlot.label,
              time,
              slotType,
              when: candidate
            };
          }
        }
      }
      return next;
    }

    function formatRemaining(ms) {
      const total = Math.max(0, Math.floor(ms / 1000));
      const d = Math.floor(total / 86400);
      const h = Math.floor((total % 86400) / 3600);
      const m = Math.floor((total % 3600) / 60);
      const s = total % 60;
      if (d > 0) return `${d}h ${String(h).padStart(2, "0")}j ${String(m).padStart(2, "0")}m`;
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    function renderInstagramTimeline() {
      const analytics = getInstagramTimelineAnalytics();
      const totalPosts = igPosts.length;

      if (!totalPosts) {
        refs.igTopSlots.textContent = "Top slots akan muncul setelah ada data posting.";
        refs.igInsights.textContent = "Belum ada data posting IG.";
        refs.igConsistency.textContent = `Target konsistensi: ${IG_WEEKLY_TARGET} posting per minggu. Progress minggu ini: 0/${IG_WEEKLY_TARGET}.`;
        refs.igTimeline.innerHTML = IG_DAYS.map((day, idx) => `
          <div class="ig-row" data-day="${day}" style="animation-delay:${idx * 0.03}s;">
            <div class="ig-day">${IG_DAY_LABEL[day]}</div>
            <div class="ig-slot-wrap">
              <span class="ig-slot" data-day="${day}" data-time="${IG_DEFAULT_SLOTS[day][0]}" data-kind="primary">${IG_DEFAULT_SLOTS[day][0]}</span>
              <span class="ig-slot secondary" data-day="${day}" data-time="${IG_DEFAULT_SLOTS[day][1]}" data-kind="secondary">${IG_DEFAULT_SLOTS[day][1]}</span>
              <span class="ig-badge">Baseline</span>
            </div>
          </div>
        `).join("");
        updateInstagramRealtimeStatus();
        return;
      }

      const topLines = analytics.topSlots.length
        ? analytics.topSlots.map((slot, i) => `${i + 1}. ${IG_DAY_LABEL[slot.day]} ${slot.time}  | Avg ER ${slot.avg.toFixed(2)}%`).join("\n")
        : "Belum ada slot terbaik.";

      refs.igTopSlots.textContent = `Top Jam Posting\n${topLines}`;
      refs.igInsights.textContent = `Data posting: ${totalPosts} konten. Rata-rata engagement rate: ${analytics.avgRate.toFixed(2)}%.`;
      const weeklyCount = getWeeklyPostCount(new Date());
      const consistencyPct = Math.min(100, Math.round((weeklyCount / IG_WEEKLY_TARGET) * 100));
      refs.igConsistency.textContent = `Konsistensi minggu ini: ${weeklyCount}/${IG_WEEKLY_TARGET} posting (${consistencyPct}%). ${weeklyCount >= IG_WEEKLY_TARGET ? "Target tercapai." : "Tambahkan konten sesuai slot rekomendasi."}`;
      refs.igTimeline.innerHTML = analytics.weekPlan.map((slot, idx) => `
        <div class="ig-row" data-day="${slot.day}" style="animation-delay:${idx * 0.03}s;">
          <div class="ig-day">${slot.label}</div>
          <div class="ig-slot-wrap">
            <span class="ig-slot" data-day="${slot.day}" data-time="${slot.primary}" data-kind="primary">${slot.primary}</span>
            <span class="ig-slot secondary" data-day="${slot.day}" data-time="${slot.secondary}" data-kind="secondary">${slot.secondary}</span>
            <span class="ig-badge">${slot.source}</span>
          </div>
        </div>
      `).join("");
      updateInstagramRealtimeStatus();
    }

    function updateInstagramRealtimeStatus() {
      if (!refs.igTimeline) return;
      const analytics = getInstagramTimelineAnalytics();
      const plan = analytics.weekPlan || [];
      if (!plan.length) return;

      const now = new Date();
      const currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][now.getDay()];
      const slotsEl = refs.igTimeline.querySelectorAll(".ig-slot");
      const rowsEl = refs.igTimeline.querySelectorAll(".ig-row");

      rowsEl.forEach(row => {
        row.classList.toggle("today", row.dataset.day === currentDay);
      });

      slotsEl.forEach(el => {
        el.classList.remove("now", "next", "missed");
      });

      let activeNow = null;
      slotsEl.forEach(el => {
        if (el.dataset.day !== currentDay) return;
        const scheduled = buildSlotDateTime(el.dataset.day, el.dataset.time, now);
        const diffMin = (scheduled.getTime() - now.getTime()) / 60000;
        if (Math.abs(diffMin) <= 45) {
          el.classList.add("now");
          activeNow = { day: el.dataset.day, time: el.dataset.time };
        } else if (diffMin < -45) {
          el.classList.add("missed");
        }
      });

      const nextSlot = getNextUploadSlot(plan, now);
      if (nextSlot) {
        const selector = `.ig-slot[data-day="${nextSlot.day}"][data-time="${nextSlot.time}"]`;
        const nextEl = refs.igTimeline.querySelector(selector);
        if (nextEl && !nextEl.classList.contains("now")) {
          nextEl.classList.add("next");
        }

        if (activeNow) {
          refs.igRealtimeTitle.textContent = "Waktu Ideal Posting: Sekarang";
          refs.igRealtimeCountdown.textContent = `POST NOW (${IG_DAY_LABEL[activeNow.day]} ${activeNow.time})`;
          refs.igRealtimeMeta.textContent = "Slot emas sedang aktif. Upload sekarang untuk menjaga konsistensi dan momentum engagement.";
        } else {
          const remaining = nextSlot.when.getTime() - now.getTime();
          refs.igRealtimeTitle.textContent = "Next Upload";
          refs.igRealtimeCountdown.textContent = formatRemaining(remaining);
          refs.igRealtimeMeta.textContent = `${nextSlot.label} ${nextSlot.time} (${nextSlot.slotType === "primary" ? "slot utama" : "slot cadangan"}).`;
        }
      }
    }

    function loadUsers() {
      try {
        const raw = localStorage.getItem(USERS_STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (_) {
        return [];
      }
    }

    function saveUsers(users) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    }

    function hashPassword(password) {
      try {
        return btoa(unescape(encodeURIComponent(String(password || ""))));
      } catch (_) {
        return String(password || "");
      }
    }

    function setAuthMessage(message, type) {
      const resolvedType = type === true ? "error" : type === false ? "" : String(type || "");
      refs.authMessage.textContent = message || "";
      refs.authMessage.classList.toggle("error", resolvedType === "error");
      refs.authMessage.classList.toggle("success", resolvedType === "success");
      refs.authMessage.style.opacity = message ? "1" : "0.82";
      refs.authMessage.style.transform = message ? "translateY(0)" : "translateY(-1px)";
    }

    function animateAuthForm(formEl, animationClass) {
      formEl.classList.remove(animationClass);
      void formEl.offsetWidth;
      formEl.classList.add(animationClass);
    }

    function switchAuthTab(mode) {
      const isLogin = mode === "login";
      refs.authCard.dataset.mode = isLogin ? "login" : "signup";
      refs.showLoginTab.classList.toggle("active", isLogin);
      refs.showSignupTab.classList.toggle("active", !isLogin);
      refs.resetForm.classList.add("hidden");
      refs.loginForm.classList.toggle("hidden", !isLogin);
      refs.signupForm.classList.toggle("hidden", isLogin);
      animateAuthForm(isLogin ? refs.loginForm : refs.signupForm, "reveal");
      setAuthMessage("");
    }

    function openResetPasswordForm() {
      refs.authCard.dataset.mode = "login";
      refs.showLoginTab.classList.add("active");
      refs.showSignupTab.classList.remove("active");
      refs.loginForm.classList.add("hidden");
      refs.signupForm.classList.add("hidden");
      refs.resetForm.classList.remove("hidden");
      refs.resetEmail.value = normalizeEmail(refs.loginEmail.value);
      refs.resetPassword.value = "";
      refs.resetPasswordConfirm.value = "";
      animateAuthForm(refs.resetForm, "reveal");
      setAuthMessage("Masukkan email terdaftar dan password baru.", "");
    }

    function loadTasks(email) {
      try {
        const raw = localStorage.getItem(getTaskStorageKey(email));
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (_) {
        return [];
      }
    }

    function saveTasks() {
      if (!currentUser) return;
      localStorage.setItem(getTaskStorageKey(currentUser.email), JSON.stringify(tasks));
    }

    function loadFinanceEntries(email) {
      try {
        const raw = localStorage.getItem(getFinanceStorageKey(email));
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (_) {
        return [];
      }
    }

    function saveFinanceEntries() {
      if (!currentUser) return;
      localStorage.setItem(getFinanceStorageKey(currentUser.email), JSON.stringify(financeEntries));
    }

    function saveSession(email, dashboard) {
      const session = {
        email: normalizeEmail(email),
        dashboard: dashboard === "finance" ? "finance" : "tasks"
      };
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    }

    function showDashboard(dashboard) {
      const showFinance = dashboard === "finance";
      refs.dashboardApp.classList.toggle("hidden", showFinance);
      refs.financeDashboardApp.classList.toggle("hidden", !showFinance);
      refs.authApp.classList.add("hidden");
    }

    function startSession(user, targetDashboard) {
      currentUser = {
        name: String(user.name || "").trim() || user.email,
        email: normalizeEmail(user.email)
      };
      activeDashboard = targetDashboard === "finance" ? "finance" : "tasks";
      saveSession(currentUser.email, activeDashboard);
      currentProfile = loadUserProfile(currentUser);
      fillProfileForm(currentProfile);
      setProfileStatus("Data profil disimpan per akun dan tetap ada setelah logout.");
      tasks = loadTasks(currentUser.email).map(normalizeTask);
      igPosts = loadIGPosts(currentUser.email).map(normalizeIGPost);
      clearIGPuzzleImages(false, false);
      igPuzzleImages = loadIGPuzzleImages(currentUser.email);
      financeEntries = loadFinanceEntries(currentUser.email).map(normalizeFinanceEntry);
      showDashboard(activeDashboard);
      if (!refs.igDate.value) refs.igDate.value = new Date().toISOString().slice(0, 10);
      if (!refs.igTime.value) refs.igTime.value = "12:00";
      if (!refs.financeDate.value) refs.financeDate.value = new Date().toISOString().slice(0, 10);
      if (!refs.financeMonth.value) refs.financeMonth.value = new Date().toISOString().slice(0, 7);
      setView(activeView);
      rerender();
      rerenderFinance();
    }

    function logout() {
      if (currentUser) {
        saveCurrentProfile(false);
      }
      currentUser = null;
      currentProfile = null;
      tasks = [];
      igPosts = [];
      clearIGPuzzleImages(false, false);
      financeEntries = [];
      activeDashboard = "tasks";
      localStorage.removeItem(SESSION_STORAGE_KEY);
      refs.dashboardApp.classList.add("hidden");
      refs.financeDashboardApp.classList.add("hidden");
      refs.authApp.classList.remove("hidden");
      switchAuthTab("login");
      refs.loginForm.reset();
      refs.resetForm.reset();
      refs.signupForm.reset();
      refs.profileForm.reset();
      refs.financeForm.reset();
      refs.loginTargetDashboard.value = "tasks";
      setAuthMessage("Anda telah logout.");
    }

    function restoreSession() {
      const rawSession = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!rawSession) return false;
      let email = "";
      let dashboard = "tasks";
      try {
        const parsed = JSON.parse(rawSession);
        if (parsed && typeof parsed === "object") {
          email = normalizeEmail(parsed.email);
          dashboard = parsed.dashboard === "finance" ? "finance" : "tasks";
        } else if (typeof parsed === "string") {
          email = normalizeEmail(parsed);
        }
      } catch (_) {
        email = normalizeEmail(rawSession);
      }
      if (!email) return false;
      const users = loadUsers();
      const user = users.find(u => normalizeEmail(u.email) === email);
      if (!user) return false;
      startSession(user, dashboard);
      return true;
    }

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function formatDate(dateStr) {
      if (!dateStr) return "-";
      const d = new Date(dateStr + "T00:00:00");
      if (Number.isNaN(d.getTime())) return "-";
      return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
    }

    function formatDateTime(dateStr) {
      if (!dateStr) return "-";
      const d = new Date(dateStr);
      if (Number.isNaN(d.getTime())) return "-";
      return d.toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }

    function toMs(dateStr) {
      const ms = new Date(String(dateStr || "")).getTime();
      return Number.isFinite(ms) ? ms : 0;
    }

    function isOverdue(task) {
      if (!task.dueDate || task.status === "Done") return false;
      const due = new Date(task.dueDate + "T23:59:59").getTime();
      return Date.now() > due;
    }

    function statusClass(status) {
      if (status === "In Progress") return "s-progress";
      if (status === "Review") return "s-review";
      if (status === "Done") return "s-done";
      return "s-todo";
    }

    function priorityClass(priority) {
      if (priority === "High") return "prio-high";
      if (priority === "Low") return "prio-low";
      return "prio-medium";
    }

    function typeClass(type) {
      return type === "Graphic Design" ? "p-design" : "p-web";
    }

    function hasDesignKeyword(text) {
      return /\b(desain|design)\b/i.test(String(text || ""));
    }

    function hasWebsiteKeyword(text) {
      return /\b(web|website|frontend|backend|landing\s?page)\b/i.test(String(text || ""));
    }

    function computeEfficiency(est, act, status) {
      const e = Number(est) || 0;
      const a = Number(act) || 0;
      if (status !== "Done" || e <= 0 || a <= 0) return "-";
      return ((e / a) * 100).toFixed(0) + "%";
    }

    function getStats() {
      const total = tasks.length;
      const done = tasks.filter(t => t.status === "Done").length;
      const inProgress = tasks.filter(t => t.status === "In Progress").length;
      const est = tasks.reduce((s, t) => s + (Number(t.estimateHours) || 0), 0);
      const act = tasks.reduce((s, t) => s + (Number(t.actualHours) || 0), 0);
      const overdue = tasks.filter(isOverdue).length;
      const urgent = tasks.filter(t => t.priority === "High" && t.status !== "Done").length;
      const web = tasks.filter(t => t.type === "Web Development");
      const design = tasks.filter(t => t.type === "Graphic Design");
      const webDone = web.filter(t => t.status === "Done").length;
      const designDone = design.filter(t => t.status === "Done").length;
      return {
        total, done, inProgress, est, act, overdue, urgent,
        pending: Math.max(0, total - done),
        completion: total ? Math.round((done / total) * 100) : 0,
        webTotal: web.length,
        webDone,
        webProgress: web.length ? Math.round((webDone / web.length) * 100) : 0,
        designTotal: design.length,
        designDone,
        designProgress: design.length ? Math.round((designDone / design.length) * 100) : 0
      };
    }

    function updateClock() {
      const nowText = new Date().toLocaleString("id-ID", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      refs.clock.textContent = nowText;
      refs.financeClock.textContent = nowText;
    }

    function formatCurrency(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
      }).format(Number(value) || 0);
    }

    function getFilteredFinanceEntries() {
      const q = String(refs.financeSearch.value || "").trim().toLowerCase();
      const typeFilter = refs.financeFilterType.value;
      const methodFilter = refs.financeFilterMethod.value;
      return financeEntries
        .filter(entry => {
          const textMatch =
            !q ||
            entry.category.toLowerCase().includes(q) ||
            entry.note.toLowerCase().includes(q) ||
            entry.method.toLowerCase().includes(q);
          const typeMatch = typeFilter === "all" || entry.kind === typeFilter;
          const methodMatch = methodFilter === "all" || entry.method === methodFilter;
          return textMatch && typeMatch && methodMatch;
        })
        .sort((a, b) => {
          const da = a.date ? new Date(a.date).getTime() : 0;
          const db = b.date ? new Date(b.date).getTime() : 0;
          if (db !== da) return db - da;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
    }

    function computeFinanceStats(entries) {
      const list = Array.isArray(entries) ? entries : financeEntries;
      const income = list.reduce((sum, item) => sum + (item.kind === "Income" ? Number(item.amount) || 0 : 0), 0);
      const expense = list.reduce((sum, item) => sum + (item.kind === "Expense" ? Number(item.amount) || 0 : 0), 0);
      const balance = income - expense;
      const savingRate = income > 0 ? (balance / income) * 100 : 0;
      return { income, expense, balance, savingRate };
    }

    function renderFinanceTable(filteredEntries) {
      if (!filteredEntries.length) {
        refs.financeBody.innerHTML = "<tr><td colspan='7' class='empty'>Belum ada transaksi sesuai filter.</td></tr>";
        return;
      }
      refs.financeBody.innerHTML = filteredEntries.map((entry, idx) => `
        <tr class="row-enter" style="animation-delay:${Math.min(idx * 0.03, 0.3)}s;">
          <td>${formatDate(entry.date)}</td>
          <td><span class="pill ${entry.kind === "Income" ? "f-income" : "f-expense"}">${entry.kind === "Income" ? "Pemasukan" : "Pengeluaran"}</span></td>
          <td>${escapeHtml(entry.category)}</td>
          <td>${escapeHtml(entry.method)}</td>
          <td class="${entry.kind === "Income" ? "amount-plus" : "amount-minus"}">${formatCurrency(entry.amount)}</td>
          <td>${entry.note ? escapeHtml(entry.note) : "-"}</td>
          <td>
            <div class="action-row">
              <button class="mini d" data-fin-act="delete" data-fin-id="${entry.id}">Hapus</button>
            </div>
          </td>
        </tr>
      `).join("");
    }

    function renderMobileFinanceList(filteredEntries) {
      if (!filteredEntries.length) {
        refs.mobileFinanceList.innerHTML = "<div class='empty'>Belum ada transaksi sesuai filter.</div>";
        return;
      }

      refs.mobileFinanceList.innerHTML = filteredEntries.map((entry, idx) => `
        <article class="mobile-task-card card-enter" style="animation-delay:${Math.min(idx * 0.03, 0.3)}s;">
          <div class="mobile-task-head">
            <b>${escapeHtml(entry.category)}</b>
            <span class="pill ${entry.kind === "Income" ? "f-income" : "f-expense"}">${entry.kind === "Income" ? "Pemasukan" : "Pengeluaran"}</span>
          </div>
          <div class="mobile-task-meta">
            <div><span>Tanggal</span><strong>${formatDate(entry.date)}</strong></div>
            <div><span>Metode</span><strong>${escapeHtml(entry.method)}</strong></div>
            <div><span>Nominal</span><strong class="${entry.kind === "Income" ? "amount-plus" : "amount-minus"}">${formatCurrency(entry.amount)}</strong></div>
            <div><span>Catatan</span><strong>${entry.note ? escapeHtml(entry.note) : "-"}</strong></div>
          </div>
          <div class="action-row" style="margin-top:8px;">
            <button class="mini d" data-fin-act="delete" data-fin-id="${entry.id}">Hapus</button>
          </div>
        </article>
      `).join("");
    }

    function updateFinanceDashboardMetrics() {
      const stats = computeFinanceStats(financeEntries);
      refs.financeIncomeKpi.textContent = formatCurrency(stats.income);
      refs.financeExpenseKpi.textContent = formatCurrency(stats.expense);
      refs.financeNetKpi.textContent = formatCurrency(stats.balance);
      refs.financeSavingRateKpi.textContent = `${stats.savingRate.toFixed(1)}%`;
      refs.financeBalanceChip.textContent = formatCurrency(stats.balance);
      refs.financeExpenseChip.textContent = formatCurrency(stats.expense);

      const selectedMonth = refs.financeMonth.value || new Date().toISOString().slice(0, 7);
      const monthData = financeEntries.filter(item => String(item.date || "").slice(0, 7) === selectedMonth);
      const monthStats = computeFinanceStats(monthData);
      refs.financeMonthMeta.textContent = `${selectedMonth}: ${monthData.length} transaksi | In ${formatCurrency(monthStats.income)} | Out ${formatCurrency(monthStats.expense)} | Saldo ${formatCurrency(monthStats.balance)}.`;
    }

    function rerenderFinance() {
      const filtered = getFilteredFinanceEntries();
      renderFinanceTable(filtered);
      renderMobileFinanceList(filtered);
      updateFinanceDashboardMetrics();
    }

    function applyFinanceAction(action, id) {
      const idx = financeEntries.findIndex(entry => entry.id === id);
      if (idx < 0) return;
      if (action === "delete") {
        financeEntries.splice(idx, 1);
      } else {
        return;
      }
      saveFinanceEntries();
      rerenderFinance();
    }

    function getFilteredTasks() {
      const q = refs.searchInput.value.trim().toLowerCase();
      const typeFilter = refs.filterType.value;
      const statusFilter = refs.filterStatus.value;
      const prioFilter = refs.filterPriority.value;

      const filtered = tasks.filter(task => {
        const textMatch = !q || task.title.toLowerCase().includes(q) || task.notes.toLowerCase().includes(q);
        const typeMatch = typeFilter === "all" || task.type === typeFilter;
        const statusMatch = statusFilter === "all" || task.status === statusFilter;
        const prioMatch = prioFilter === "all" || task.priority === prioFilter;
        return textMatch && typeMatch && statusMatch && prioMatch;
      });

      return filtered.sort((a, b) => {
        const sa = STATUS_ORDER.indexOf(a.status);
        const sb = STATUS_ORDER.indexOf(b.status);
        if (sa !== sb) return sa - sb;
        const pa = PRIORITY_ORDER[a.priority] || 99;
        const pb = PRIORITY_ORDER[b.priority] || 99;
        if (pa !== pb) return pa - pb;
        const da = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
        const db = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
        if (da !== db) return da - db;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }

    function renderTable(filteredTasks) {
      if (!filteredTasks.length) {
        refs.taskBody.innerHTML = "<tr><td colspan='9' class='empty'>Tidak ada tugas sesuai filter.</td></tr>";
        return;
      }

      refs.taskBody.innerHTML = filteredTasks.map((task, idx) => {
        const overdueFlag = isOverdue(task) ? "<div class='small' style='color:#b22945;margin-top:4px;font-weight:700;'>Terlambat</div>" : "";
        return `
          <tr class="row-enter" style="animation-delay:${Math.min(idx * 0.035, 0.35)}s;">
            <td>
              <b>${escapeHtml(task.title)}</b>
              ${task.notes ? `<div class='small' style='margin-top:4px;color:#607292;'>${escapeHtml(task.notes)}</div>` : ""}
              ${overdueFlag}
            </td>
            <td><span class="pill ${typeClass(task.type)}">${task.type}</span></td>
            <td><span class="pill ${priorityClass(task.priority)}">${task.priority}</span></td>
            <td><span class="status ${statusClass(task.status)}">${task.status}</span></td>
            <td>${formatDate(task.dueDate)}</td>
            <td>${Number(task.estimateHours || 0).toFixed(1)} jam</td>
            <td>${Number(task.actualHours || 0).toFixed(1)} jam</td>
            <td>${computeEfficiency(task.estimateHours, task.actualHours, task.status)}</td>
            <td>
              <div class="action-row">
                <button class="mini" data-act="next" data-id="${task.id}">Next</button>
                <button class="mini" data-act="addtime" data-id="${task.id}">+0.5h</button>
                <button class="mini d" data-act="delete" data-id="${task.id}">Hapus</button>
              </div>
            </td>
          </tr>
        `;
      }).join("");
    }

    function renderMobileTaskList(filteredTasks) {
      if (!refs.mobileTaskList) return;
      if (!filteredTasks.length) {
        refs.mobileTaskList.innerHTML = "<div class='empty'>Tidak ada tugas sesuai filter.</div>";
        return;
      }

      refs.mobileTaskList.innerHTML = filteredTasks.map((task, idx) => {
        const overdue = isOverdue(task);
        return `
          <article class="mobile-task-card card-enter" style="animation-delay:${Math.min(idx * 0.03, 0.3)}s;">
            <div class="mobile-task-head">
              <b>${escapeHtml(task.title)}</b>
              <span class="status ${statusClass(task.status)}">${task.status}</span>
            </div>
            <div class="mobile-task-pills">
              <span class="pill ${typeClass(task.type)}">${task.type}</span>
              <span class="pill ${priorityClass(task.priority)}">${task.priority}</span>
              ${overdue ? "<span class='pill m-overdue'>Terlambat</span>" : ""}
            </div>
            <div class="mobile-task-meta">
              <div><span>Deadline</span><strong>${formatDate(task.dueDate)}</strong></div>
              <div><span>Estimasi</span><strong>${Number(task.estimateHours || 0).toFixed(1)} jam</strong></div>
              <div><span>Aktual</span><strong>${Number(task.actualHours || 0).toFixed(1)} jam</strong></div>
              <div><span>Efisiensi</span><strong>${computeEfficiency(task.estimateHours, task.actualHours, task.status)}</strong></div>
            </div>
            ${task.notes ? `<p class="mobile-task-note">${escapeHtml(task.notes)}</p>` : ""}
            <div class="action-row">
              <button class="mini" data-act="next" data-id="${task.id}">Next</button>
              <button class="mini" data-act="addtime" data-id="${task.id}">+0.5h</button>
              <button class="mini d" data-act="delete" data-id="${task.id}">Hapus</button>
            </div>
          </article>
        `;
      }).join("");
    }

    function renderKanban(filteredTasks) {
      const grouped = {
        "To Do": [],
        "In Progress": [],
        "Review": [],
        "Done": []
      };
      filteredTasks.forEach(task => grouped[task.status].push(task));

      const laneHtml = STATUS_ORDER.map((status, laneIndex) => {
        const cards = grouped[status].map((task, idx) => `
          <article class="task-card card-enter" style="animation-delay:${Math.min((laneIndex * 0.07) + (idx * 0.03), 0.5)}s;">
            <b>${escapeHtml(task.title)}</b>
            <div style="margin-top:6px;">
              <span class="pill ${typeClass(task.type)}">${task.type}</span>
              <span class="pill ${priorityClass(task.priority)}">${task.priority}</span>
            </div>
            <div class="task-meta">
              DL: ${formatDate(task.dueDate)}<br>
              Est: ${Number(task.estimateHours || 0).toFixed(1)}h | Akt: ${Number(task.actualHours || 0).toFixed(1)}h
            </div>
          </article>
        `).join("");
        return `
          <section class="lane lane-enter" style="animation-delay:${laneIndex * 0.06}s;">
            <h4>${status} (${grouped[status].length})</h4>
            ${cards || "<div class='small' style='color:#6c7f9f;'>Kosong</div>"}
          </section>
        `;
      }).join("");

      refs.kanbanView.innerHTML = laneHtml;
    }

    function updateKPIsAndInsights() {
      const s = getStats();

      refs.kpiTotal.textContent = s.total;
      refs.kpiDone.textContent = s.done;
      refs.kpiProgress.textContent = s.inProgress;
      refs.kpiEstimate.textContent = s.est.toFixed(1);
      refs.kpiActual.textContent = s.act.toFixed(1);
      refs.kpiEfficiency.textContent = s.est > 0 && s.act > 0 ? ((s.est / s.act) * 100).toFixed(0) + "%" : "-";

      refs.progressText.textContent = s.completion + "%";
      refs.progressBar.style.width = s.completion + "%";
      refs.progressMeta.textContent = `${s.done} selesai dari ${s.total} tugas. Pending: ${s.pending}.`;

      refs.doneRing.textContent = s.completion + "%";
      refs.doneRing.style.setProperty("--pct", s.completion + "%");
      refs.insDone.textContent = s.done;
      refs.insPending.textContent = s.pending;

      refs.webTotal.textContent = s.webTotal;
      refs.webDone.textContent = s.webDone;
      refs.webProgress.textContent = s.webProgress + "%";
      refs.designTotal.textContent = s.designTotal;
      refs.designDone.textContent = s.designDone;
      refs.designProgress.textContent = s.designProgress + "%";

      refs.urgentCount.textContent = `${s.urgent} tugas prioritas tinggi`;
      refs.overdueCount.textContent = `${s.overdue} tugas terlambat`;
    }

    function collectDesignData() {
      const allDesign = tasks.filter(t => t.type === "Graphic Design");
      const source = refs.doneOnlyReport.checked ? allDesign.filter(t => t.status === "Done") : allDesign;
      const done = source.filter(t => t.status === "Done").length;
      const inProgress = source.filter(t => t.status === "In Progress").length;
      const review = source.filter(t => t.status === "Review").length;
      const todo = source.filter(t => t.status === "To Do").length;
      const est = source.reduce((sum, t) => sum + (Number(t.estimateHours) || 0), 0);
      const act = source.reduce((sum, t) => sum + (Number(t.actualHours) || 0), 0);
      return { allDesign, source, done, inProgress, review, todo, est, act };
    }

    function buildWAReport() {
      const d = collectDesignData();
      const now = new Date().toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });

      const lines = [
        "*Report Graphic Design*",
        `Waktu: ${now}`,
        `Dataset: ${refs.doneOnlyReport.checked ? "Done only" : "All status"}`,
        `Total tugas desain: ${d.source.length}`,
        `Status: Done ${d.done} | In Progress ${d.inProgress} | Review ${d.review} | To Do ${d.todo}`,
        `Jam: Est ${d.est.toFixed(1)} | Akt ${d.act.toFixed(1)}`,
        "",
        "*Rincian:*"
      ];

      if (!d.source.length) {
        lines.push("- Tidak ada data tugas desain.");
      } else {
        const sorted = [...d.source].sort((a, b) => {
          const sa = STATUS_ORDER.indexOf(a.status);
          const sb = STATUS_ORDER.indexOf(b.status);
          if (sa !== sb) return sa - sb;
          const da = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
          const db = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
          return da - db;
        });
        sorted.forEach((task, i) => {
          lines.push(`${i + 1}. [${task.status}] ${task.title} | DL ${formatDate(task.dueDate)} | Est ${Number(task.estimateHours || 0).toFixed(1)}h | Akt ${Number(task.actualHours || 0).toFixed(1)}h`);
        });
      }
      return lines.join("\n");
    }

    function updateWASection() {
      const d = collectDesignData();
      const unlocked = d.allDesign.length >= DESIGN_REPORT_THRESHOLD;
      const remaining = Math.max(0, DESIGN_REPORT_THRESHOLD - d.allDesign.length);

      refs.reportMeta.textContent = `Tugas desain: ${d.allDesign.length}/${DESIGN_REPORT_THRESHOLD}.`;
      refs.waPreview.textContent = buildWAReport();
      refs.copyWaReport.disabled = !unlocked;
      refs.openWaReport.disabled = !unlocked;
      refs.waStatus.textContent = unlocked
        ? "Report aktif. Gunakan Salin/Kirim ke WA untuk membuat laporan harian."
        : `Tambah ${remaining} tugas desain lagi untuk aktifkan fitur report WA.`;
      renderDesignProjectGroups();
    }

    function renderDesignProjectGroups() {
      if (!refs.designGroupList || !refs.designGroupHint || !refs.designGroupCount) return;

      const designTasks = tasks
        .filter(t => t.type === "Graphic Design")
        .sort((a, b) => toMs(b.createdAt) - toMs(a.createdAt));

      if (designTasks.length < DESIGN_REPORT_THRESHOLD) {
        const remaining = DESIGN_REPORT_THRESHOLD - designTasks.length;
        refs.designGroupCount.textContent = "0 group";
        refs.designGroupList.innerHTML = "";
        refs.designGroupHint.textContent = `Grouping akan aktif saat project desain mencapai ${DESIGN_REPORT_THRESHOLD} item. Tambah ${remaining} lagi.`;
        return;
      }

      const groups = [];
      for (let i = 0; i < designTasks.length; i += DESIGN_REPORT_THRESHOLD) {
        groups.push(designTasks.slice(i, i + DESIGN_REPORT_THRESHOLD));
      }

      const nowMs = Date.now();
      const newProjectLimitMs = DESIGN_PROJECT_NEW_DAYS * 86400000;
      refs.designGroupCount.textContent = `${groups.length} group`;
      refs.designGroupList.innerHTML = groups.map((group, groupIndex) => {
        const dateMs = group
          .map(item => toMs(item.createdAt))
          .filter(ms => ms > 0);
        const newest = dateMs.length ? Math.max(...dateMs) : 0;
        const oldest = dateMs.length ? Math.min(...dateMs) : 0;
        const rangeText = newest && oldest
          ? (newest === oldest
            ? new Date(newest).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })
            : `${new Date(newest).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })} - ${new Date(oldest).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })}`)
          : "-";

        const rows = group.map(task => {
          const createdMs = toMs(task.createdAt);
          const isNew = createdMs > 0 && (nowMs - createdMs) <= newProjectLimitMs;
          return `
            <div class="design-group-item">
              <span class="design-group-item-title">${escapeHtml(task.title)}</span>
              <span class="design-group-item-date">${formatDateTime(task.createdAt)}</span>
              <span class="design-project-badge ${isNew ? "is-new" : "is-old"}">${isNew ? "Baru" : "Lama"}</span>
            </div>
          `;
        }).join("");

        return `
          <article class="design-group-card card-enter" style="animation-delay:${Math.min(groupIndex * 0.04, 0.24)}s;">
            <div class="design-group-card-head">
              <b>Group ${groupIndex + 1}</b>
              ${groupIndex === 0 ? "<span class='design-group-tag latest'>Batch terbaru</span>" : "<span class='design-group-tag'>Batch arsip</span>"}
            </div>
            <div class="design-group-card-meta">Tanggal batch: ${rangeText}</div>
            <div class="design-group-items">${rows}</div>
          </article>
        `;
      }).join("");

      refs.designGroupHint.textContent = `Project desain dikelompokkan per ${DESIGN_REPORT_THRESHOLD} item. Label Baru berlaku untuk project dalam ${DESIGN_PROJECT_NEW_DAYS} hari terakhir.`;
    }

    function rerender() {
      const filtered = getFilteredTasks();
      renderTable(filtered);
      renderMobileTaskList(filtered);
      renderKanban(filtered);
      updateKPIsAndInsights();
      updateWASection();
      renderInstagramTimeline();
      renderIGPuzzleGrid();
    }

    function setView(view) {
      activeView = view;
      const isTable = view === "table";
      refs.tableView.classList.toggle("hidden", !isTable);
      refs.kanbanView.classList.toggle("hidden", isTable);
      refs.tableBtn.classList.toggle("active", isTable);
      refs.kanbanBtn.classList.toggle("active", !isTable);
      refs.activeViewText.textContent = isTable ? "Table View" : "Kanban View";
    }

    function nextStatus(current) {
      const i = STATUS_ORDER.indexOf(current);
      if (i < 0 || i >= STATUS_ORDER.length - 1) return STATUS_ORDER[0];
      return STATUS_ORDER[i + 1];
    }

    function applyTaskAction(action, id) {
      const idx = tasks.findIndex(t => t.id === id);
      if (idx === -1) return;

      if (action === "next") {
        const ns = nextStatus(tasks[idx].status);
        tasks[idx].status = ns;
        if (ns === "Done" && !tasks[idx].completedAt) tasks[idx].completedAt = new Date().toISOString();
        if (ns !== "Done") tasks[idx].completedAt = "";
      } else if (action === "addtime") {
        tasks[idx].actualHours = Number(tasks[idx].actualHours || 0) + 0.5;
      } else if (action === "delete") {
        tasks.splice(idx, 1);
      } else {
        return;
      }

      saveTasks();
      rerender();
    }

    async function copyText(text) {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
      }
      const t = document.createElement("textarea");
      t.value = text;
      t.style.position = "fixed";
      t.style.left = "-9999px";
      document.body.appendChild(t);
      t.focus();
      t.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(t);
      if (!ok) throw new Error("copy_failed");
    }

    function createButtonRipple(event, target) {
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "btn-ripple";
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      target.appendChild(ripple);
      ripple.addEventListener("animationend", function () {
        ripple.remove();
      });
    }

    function downloadJson() {
      const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 10);
      const userPart = currentUser ? normalizeEmail(currentUser.email).replace(/[^a-z0-9_.-]/g, "_") : "user";
      a.href = url;
      a.download = `taskflow-backup-${userPart}-${stamp}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }

    function importJsonFile(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function () {
        try {
          const data = JSON.parse(String(reader.result || "[]"));
          if (!Array.isArray(data)) throw new Error("invalid");
          tasks = data.map(normalizeTask);
          saveTasks();
          rerender();
          alert("Import berhasil.");
        } catch (_) {
          alert("File JSON tidak valid.");
        }
      };
      reader.readAsText(file);
    }

    refs.showLoginTab.addEventListener("click", function () {
      switchAuthTab("login");
    });

    refs.showSignupTab.addEventListener("click", function () {
      switchAuthTab("signup");
    });

    refs.showResetPassword.addEventListener("click", function () {
      openResetPasswordForm();
    });

    refs.backToLoginFromReset.addEventListener("click", function () {
      const email = normalizeEmail(refs.resetEmail.value);
      refs.resetForm.reset();
      switchAuthTab("login");
      refs.loginEmail.value = email;
      refs.loginPassword.value = "";
      setAuthMessage("Masukkan password untuk login.", "");
    });

    refs.loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = normalizeEmail(refs.loginEmail.value);
      const password = refs.loginPassword.value;
      const targetDashboard = refs.loginTargetDashboard.value === "finance" ? "finance" : "tasks";
      const users = loadUsers();
      const user = users.find(u => normalizeEmail(u.email) === email);
      const passHash = hashPassword(password);

      if (!user || user.passwordHash !== passHash) {
        animateAuthForm(refs.loginForm, "shake");
        setAuthMessage("Email atau password salah.", "error");
        return;
      }

      refs.loginForm.reset();
      setAuthMessage("");
      startSession(user, targetDashboard);
    });

    refs.resetForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = normalizeEmail(refs.resetEmail.value);
      const password = refs.resetPassword.value;
      const confirmPassword = refs.resetPasswordConfirm.value;

      if (!email || !password || !confirmPassword) {
        animateAuthForm(refs.resetForm, "shake");
        setAuthMessage("Semua field reset password wajib diisi.", "error");
        return;
      }
      if (password.length < 6) {
        animateAuthForm(refs.resetForm, "shake");
        setAuthMessage("Password baru minimal 6 karakter.", "error");
        return;
      }
      if (password !== confirmPassword) {
        animateAuthForm(refs.resetForm, "shake");
        setAuthMessage("Konfirmasi password baru tidak sama.", "error");
        return;
      }

      const users = loadUsers();
      const idx = users.findIndex(u => normalizeEmail(u.email) === email);
      if (idx < 0) {
        animateAuthForm(refs.resetForm, "shake");
        setAuthMessage("Email tidak terdaftar.", "error");
        return;
      }

      users[idx].passwordHash = hashPassword(password);
      users[idx].updatedAt = new Date().toISOString();
      saveUsers(users);

      refs.resetForm.reset();
      switchAuthTab("login");
      refs.loginEmail.value = email;
      setAuthMessage("Password berhasil direset. Silakan login.", "success");
      animateAuthForm(refs.loginForm, "reveal");
    });

    refs.signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = String(refs.signupName.value || "").trim();
      const email = normalizeEmail(refs.signupEmail.value);
      const password = refs.signupPassword.value;
      const confirmPassword = refs.signupPasswordConfirm.value;

      if (!name || !email || !password) {
        animateAuthForm(refs.signupForm, "shake");
        setAuthMessage("Semua field wajib diisi.", "error");
        return;
      }
      if (password.length < 6) {
        animateAuthForm(refs.signupForm, "shake");
        setAuthMessage("Password minimal 6 karakter.", "error");
        return;
      }
      if (password !== confirmPassword) {
        animateAuthForm(refs.signupForm, "shake");
        setAuthMessage("Konfirmasi password tidak sama.", "error");
        return;
      }

      const users = loadUsers();
      const exists = users.some(u => normalizeEmail(u.email) === email);
      if (exists) {
        animateAuthForm(refs.signupForm, "shake");
        setAuthMessage("Email sudah terdaftar.", "error");
        return;
      }

      const newUser = {
        id: crypto.randomUUID(),
        name,
        email,
        passwordHash: hashPassword(password),
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      saveUsers(users);
      refs.signupForm.reset();
      switchAuthTab("login");
      refs.loginEmail.value = email;
      setAuthMessage("Akun berhasil dibuat. Silakan login.", "success");
      animateAuthForm(refs.loginForm, "reveal");
    });

    refs.profileForm.addEventListener("submit", function (e) {
      e.preventDefault();
      saveCurrentProfile(true);
    });

    [refs.profileName, refs.profileRole].forEach(el => {
      el.addEventListener("input", function () {
        renderProfileHeader({
          name: refs.profileName.value || (currentUser ? currentUser.name : ""),
          role: refs.profileRole.value || ""
        });
      });
    });

    refs.logoutBtn.addEventListener("click", logout);
    refs.financeLogoutBtn.addEventListener("click", logout);

    refs.igForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!currentUser) return;

      const reach = Number(refs.igReach.value || 0);
      if (reach <= 0) {
        refs.igInsights.textContent = "Reach harus lebih besar dari 0.";
        return;
      }

      const post = normalizeIGPost({
        id: crypto.randomUUID(),
        date: refs.igDate.value,
        time: refs.igTime.value,
        contentType: refs.igContentType.value,
        reach,
        likes: Number(refs.igLikes.value || 0),
        comments: Number(refs.igComments.value || 0),
        shares: Number(refs.igShares.value || 0),
        saves: Number(refs.igSaves.value || 0),
        createdAt: new Date().toISOString()
      });

      igPosts.push(post);
      saveIGPosts();
      renderInstagramTimeline();

      const er = computeIGEngagementRate(post);
      refs.igInsights.textContent = `Data posting ditambahkan. ER konten terbaru: ${er.toFixed(2)}%.`;
      refs.igLikes.value = "0";
      refs.igComments.value = "0";
      refs.igShares.value = "0";
      refs.igSaves.value = "0";
    });

    refs.seedIgData.addEventListener("click", function () {
      if (!currentUser) return;
      const dayMs = 86400000;
      const toDate = daysAgo => new Date(Date.now() - (daysAgo * dayMs)).toISOString().slice(0, 10);

      igPosts = [
        { date: toDate(1), time: "19:00", contentType: "Reels", reach: 5600, likes: 730, comments: 65, shares: 140, saves: 210 },
        { date: toDate(2), time: "12:00", contentType: "Carousel", reach: 4200, likes: 410, comments: 34, shares: 70, saves: 95 },
        { date: toDate(3), time: "20:00", contentType: "Reels", reach: 6100, likes: 805, comments: 82, shares: 160, saves: 240 },
        { date: toDate(4), time: "11:30", contentType: "Single Image", reach: 3500, likes: 300, comments: 28, shares: 40, saves: 60 },
        { date: toDate(5), time: "18:30", contentType: "Carousel", reach: 3900, likes: 360, comments: 31, shares: 56, saves: 76 },
        { date: toDate(6), time: "09:30", contentType: "Story", reach: 2700, likes: 190, comments: 18, shares: 24, saves: 22 },
        { date: toDate(7), time: "19:30", contentType: "Reels", reach: 6400, likes: 860, comments: 90, shares: 185, saves: 260 },
        { date: toDate(8), time: "12:00", contentType: "Carousel", reach: 4100, likes: 395, comments: 35, shares: 68, saves: 90 },
        { date: toDate(9), time: "19:00", contentType: "Reels", reach: 5900, likes: 790, comments: 77, shares: 166, saves: 225 },
        { date: toDate(10), time: "10:00", contentType: "Single Image", reach: 3000, likes: 250, comments: 20, shares: 28, saves: 40 }
      ].map(item => normalizeIGPost({ ...item, id: crypto.randomUUID(), createdAt: new Date().toISOString() }));

      saveIGPosts();
      renderInstagramTimeline();
      refs.igInsights.textContent = "Demo data IG berhasil dimuat. Timeline ideal sudah diperbarui.";
    });

    refs.clearIgData.addEventListener("click", function () {
      if (!currentUser) return;
      if (!confirm("Hapus semua data performa posting Instagram?")) return;
      igPosts = [];
      saveIGPosts();
      renderInstagramTimeline();
      refs.igInsights.textContent = "Data IG berhasil direset.";
    });

    refs.igPuzzleUpload.addEventListener("change", async function (e) {
      await addIGPuzzleImages(e.target.files);
      e.target.value = "";
    });

    refs.clearIgPuzzle.addEventListener("click", function () {
      clearIGPuzzleImages(true);
    });

    refs.igPuzzleGrid.addEventListener("click", function (e) {
      const moveBtn = e.target.closest("button[data-ig-puzzle-move][data-ig-puzzle-id]");
      if (moveBtn) {
        const offset = moveBtn.dataset.igPuzzleMove === "prev" ? -1 : 1;
        moveIGPuzzleImageByOffset(moveBtn.dataset.igPuzzleId, offset);
        return;
      }

      const removeBtn = e.target.closest("button[data-ig-puzzle-remove]");
      if (!removeBtn) return;
      removeIGPuzzleImageById(removeBtn.dataset.igPuzzleRemove);
    });

    refs.igPuzzleGrid.addEventListener("dragstart", function (e) {
      const item = e.target.closest(".ig-puzzle-item[data-ig-puzzle-id]");
      if (!item) return;
      igPuzzleDragId = item.dataset.igPuzzleId || "";
      item.classList.add("dragging");
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = "move";
        try {
          e.dataTransfer.setData("text/plain", igPuzzleDragId);
        } catch (_) {}
      }
    });

    refs.igPuzzleGrid.addEventListener("dragover", function (e) {
      const targetItem = e.target.closest(".ig-puzzle-item[data-ig-puzzle-id]");
      if (!targetItem) return;
      const targetId = targetItem.dataset.igPuzzleId || "";
      if (!igPuzzleDragId || targetId === igPuzzleDragId) return;
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
      refs.igPuzzleGrid.querySelectorAll(".ig-puzzle-item.drop-target").forEach(function (el) {
        if (el !== targetItem) el.classList.remove("drop-target");
      });
      targetItem.classList.add("drop-target");
    });

    refs.igPuzzleGrid.addEventListener("drop", function (e) {
      const targetItem = e.target.closest(".ig-puzzle-item[data-ig-puzzle-id]");
      if (!targetItem) {
        clearIGPuzzleDragState();
        return;
      }
      e.preventDefault();
      const fallbackSource = e.dataTransfer ? e.dataTransfer.getData("text/plain") : "";
      const sourceId = igPuzzleDragId || fallbackSource;
      const targetId = targetItem.dataset.igPuzzleId || "";
      if (!sourceId || !targetId || sourceId === targetId) {
        clearIGPuzzleDragState();
        return;
      }
      moveIGPuzzleImageById(sourceId, targetId);
      clearIGPuzzleDragState();
    });

    refs.igPuzzleGrid.addEventListener("dragend", clearIGPuzzleDragState);

    refs.title.addEventListener("input", function () {
      const text = refs.title.value;
      if (hasDesignKeyword(text)) {
        refs.type.value = "Graphic Design";
      } else if (hasWebsiteKeyword(text)) {
        refs.type.value = "Web Development";
      }
    });

    refs.taskForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!currentUser) return;
      const task = normalizeTask({
        id: crypto.randomUUID(),
        title: refs.title.value.trim(),
        type: refs.type.value,
        priority: refs.priority.value,
        status: refs.status.value,
        dueDate: refs.dueDate.value,
        estimateHours: Number(refs.estimateHours.value || 0),
        actualHours: Number(refs.actualHours.value || 0),
        notes: refs.notes.value.trim(),
        createdAt: new Date().toISOString(),
        completedAt: refs.status.value === "Done" ? new Date().toISOString() : ""
      });

      if (!task.title) return;
      tasks.push(task);
      saveTasks();
      rerender();

      refs.taskForm.reset();
      refs.status.value = "To Do";
      refs.priority.value = "Medium";
      refs.estimateHours.value = "1";
      refs.actualHours.value = "0";
    });

    function bindTaskActionEvents(container) {
      if (!container) return;
      container.addEventListener("click", function (e) {
        const btn = e.target.closest("button[data-act][data-id]");
        if (!btn) return;
        applyTaskAction(btn.dataset.act, btn.dataset.id);
      });
    }

    bindTaskActionEvents(refs.taskBody);
    bindTaskActionEvents(refs.mobileTaskList);

    function bindFinanceActionEvents(container) {
      if (!container) return;
      container.addEventListener("click", function (e) {
        const btn = e.target.closest("button[data-fin-act][data-fin-id]");
        if (!btn) return;
        applyFinanceAction(btn.dataset.finAct, btn.dataset.finId);
      });
    }

    bindFinanceActionEvents(refs.financeBody);
    bindFinanceActionEvents(refs.mobileFinanceList);

    refs.financeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!currentUser) return;
      const entry = normalizeFinanceEntry({
        id: crypto.randomUUID(),
        date: refs.financeDate.value,
        kind: refs.financeType.value,
        category: refs.financeCategory.value,
        method: refs.financeMethod.value,
        amount: refs.financeAmount.value,
        note: refs.financeNote.value,
        createdAt: new Date().toISOString()
      });

      if (!entry.date || !entry.category || entry.amount <= 0) return;
      financeEntries.push(entry);
      saveFinanceEntries();
      rerenderFinance();

      refs.financeForm.reset();
      refs.financeDate.value = new Date().toISOString().slice(0, 10);
      refs.financeType.value = "Income";
      refs.financeMethod.value = "Bank Transfer";
    });

    refs.financeSeedDemo.addEventListener("click", function () {
      if (!currentUser) return;
      const today = new Date();
      const day = n => new Date(today.getTime() - n * 86400000).toISOString().slice(0, 10);
      financeEntries = [
        { date: day(0), kind: "Income", category: "Pembayaran Klien Website", method: "Bank Transfer", amount: 9500000, note: "Invoice WD-021" },
        { date: day(0), kind: "Expense", category: "Iklan Meta Ads", method: "Virtual Account", amount: 1800000, note: "Campaign Februari" },
        { date: day(1), kind: "Expense", category: "Langganan Hosting", method: "E-Wallet", amount: 450000, note: "Perpanjangan 1 bulan" },
        { date: day(2), kind: "Income", category: "Project Desain Brand Kit", method: "Bank Transfer", amount: 4200000, note: "DP 60%" },
        { date: day(3), kind: "Expense", category: "Gaji Desainer Freelance", method: "Bank Transfer", amount: 2500000, note: "Minggu ke-2" },
        { date: day(4), kind: "Expense", category: "Operasional Tim", method: "Cash", amount: 670000, note: "Transport dan meeting" }
      ].map(item => normalizeFinanceEntry({ ...item, id: crypto.randomUUID(), createdAt: new Date().toISOString() }));

      saveFinanceEntries();
      rerenderFinance();
    });

    refs.financeClearAll.addEventListener("click", function () {
      if (!currentUser) return;
      if (!confirm("Hapus semua transaksi keuangan?")) return;
      financeEntries = [];
      saveFinanceEntries();
      rerenderFinance();
    });

    refs.seedDemo.addEventListener("click", function () {
      if (!currentUser) return;
      const plusDays = d => new Date(Date.now() + d * 86400000).toISOString().slice(0, 10);
      tasks = [
        { title: "Integrasi auth JWT + refresh token", type: "Web Development", priority: "High", status: "In Progress", dueDate: plusDays(1), estimateHours: 6, actualHours: 3, notes: "Tambahkan role guard halaman admin" },
        { title: "Optimasi Core Web Vitals landing page", type: "Web Development", priority: "Medium", status: "Review", dueDate: plusDays(2), estimateHours: 4, actualHours: 4, notes: "Target LCP < 2.5s" },
        { title: "Fix validasi checkout multi-step", type: "Web Development", priority: "High", status: "To Do", dueDate: plusDays(0), estimateHours: 3, actualHours: 0.5, notes: "Perbaiki edge case field kosong" },
        { title: "Desain konten carousel edukasi", type: "Graphic Design", priority: "Medium", status: "Done", dueDate: plusDays(-1), estimateHours: 2.5, actualHours: 2.2, notes: "10 slide + cover" },
        { title: "Revisi logo campaign Q2", type: "Graphic Design", priority: "High", status: "Review", dueDate: plusDays(3), estimateHours: 3, actualHours: 2.4, notes: "2 opsi warna sekunder" },
        { title: "Template feed promo paket bundle", type: "Graphic Design", priority: "Medium", status: "In Progress", dueDate: plusDays(2), estimateHours: 3, actualHours: 1.2, notes: "Format 1080x1080" },
        { title: "Desain thumbnail studi kasus", type: "Graphic Design", priority: "Low", status: "To Do", dueDate: plusDays(4), estimateHours: 1.5, actualHours: 0, notes: "Untuk Behance project page" },
        { title: "Motion teaser produk baru", type: "Graphic Design", priority: "High", status: "Done", dueDate: plusDays(1), estimateHours: 5, actualHours: 4.2, notes: "Durasi 15 detik, format reels" }
      ].map(item => normalizeTask({
        ...item,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        completedAt: item.status === "Done" ? new Date().toISOString() : ""
      }));

      saveTasks();
      rerender();
    });

    refs.copyWaReport.addEventListener("click", async function () {
      try {
        await copyText(buildWAReport());
        refs.waStatus.textContent = "Laporan tersalin. Tempel langsung ke chat WhatsApp.";
      } catch (_) {
        refs.waStatus.textContent = "Gagal menyalin otomatis. Silakan copy manual dari preview.";
      }
    });

    refs.openWaReport.addEventListener("click", function () {
      const url = "https://wa.me/?text=" + encodeURIComponent(buildWAReport());
      window.open(url, "_blank");
    });

    refs.doneOnlyReport.addEventListener("change", updateWASection);
    refs.exportJson.addEventListener("click", downloadJson);
    refs.importJson.addEventListener("click", function () { refs.importFile.click(); });
    refs.importFile.addEventListener("change", function (e) { importJsonFile(e.target.files[0]); e.target.value = ""; });
    refs.clearAll.addEventListener("click", function () {
      if (!confirm("Hapus semua tugas?")) return;
      tasks = [];
      saveTasks();
      rerender();
    });

    [refs.searchInput, refs.filterType, refs.filterStatus, refs.filterPriority].forEach(el => {
      el.addEventListener("input", rerender);
      el.addEventListener("change", rerender);
    });

    [refs.financeSearch, refs.financeFilterType, refs.financeFilterMethod, refs.financeMonth].forEach(el => {
      el.addEventListener("input", rerenderFinance);
      el.addEventListener("change", rerenderFinance);
    });

    document.addEventListener("pointerdown", function (e) {
      const target = e.target.closest(".btn, .mini, .auth-tab, .view-switch button, .chip-logout");
      if (!target) return;
      createButtonRipple(e, target);
    });

    refs.tableBtn.addEventListener("click", function () { setView("table"); });
    refs.kanbanBtn.addEventListener("click", function () { setView("kanban"); });

    setInterval(function () {
      updateClock();
      updateInstagramRealtimeStatus();
    }, 1000);
    updateClock();
    updateInstagramRealtimeStatus();
    setView("table");
    switchAuthTab("login");
    if (!restoreSession()) {
      refs.authApp.classList.remove("hidden");
      refs.dashboardApp.classList.add("hidden");
      refs.financeDashboardApp.classList.add("hidden");
      setAuthMessage("Silakan login atau buat akun karyawan terlebih dahulu.");
    }
