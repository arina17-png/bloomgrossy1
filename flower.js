function performSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        // 1. ຕັດຍະຫວ່າງ ແລະ ປ່ຽນເປັນໂຕພິມນ້ອຍ
        let query = searchInput.value.trim().toLowerCase().replace(/\s+/g, '');

        if (query !== "") {
            // 2. ດັກຈັບຄຳສັບພາສາລາວ ໃຫ້ລິ້ງໄປຫາໄຟລ໌ພາສາອັງກິດທີ່ຖືກຕ້ອງ
            if (query === "ດອກກຸຫຼາບ" || query === "ກຸຫຼາບ") {
                query = "rose";
            } else if (query === "ດອກທິວລິບ" || query === "ທິວລິບ") {
                query = "tulip";
            } else if (query === "ດອກຕາເວັນ" || query === "ຕາເວັນ") {
                query = "sunflower";
            } else if (query === "ແດນດິໄລອອນ") {
                query = "dandelion";
            } else if (query === "ລາເວນເດີ") {
                query = "lavender";
            } else if (query === "ໄຮເດຣນເຢຍ" || query === "ໄຮເດຣນເຈຍ") {
                query = "hydrangea";
            }

            // 3. ລິ້ງໄປຫາໜ້າ HTML (ແນະນຳໃຫ້ຕັ້ງຊື່ໄຟລ໌ເປັນໂຕພິມນ້ອຍທັງໝົດ)
            window.location.href = query + ".html";
        }
    }
}

// ສ່ວນຈັດການເຫດການເມື່ອກົດປຸ່ມ Enter
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');

    if (searchInput) {
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});