
// ==========================================
// KONFIGURASI KONEKSI SUPABASE
// Aplikasi Ujian Online SMA - V2
// ==========================================

const SUPABASE_URL =
    'https://hdcsgnvrljsntrttqoqr.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
    'sb_publishable_vhJ4PTHFK-oJntlBMprinA_gs_fhAGt';

// Membuat koneksi Supabase
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

// Akses global aplikasi
window.supabaseClient = supabaseClient;

console.log('Supabase berhasil diinisialisasi.');
