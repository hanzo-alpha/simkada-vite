@livewireScripts
<!-- Vendor Scripts Start -->
<script src="{{ asset('build/assets/js/vendor/jquery-3.5.1.min.js') }}"></script>
<script src="{{ asset('build/assets/js/vendor/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('build/assets/js/vendor/OverlayScrollbars.min.js') }}"></script>
<script src="{{ asset('build/assets/js/vendor/autoComplete.min.js') }}"></script>
<script src="{{ asset('build/assets/js/vendor/clamp.min.js') }}"></script>
<script src="{{ asset('build/assets/icon/acorn-icons.js') }}"></script>
<script src="{{ asset('build/assets/icon/acorn-icons-interface.js') }}"></script>
@stack('js_vendor')
<!-- Vendor Scripts End -->
<!-- Template Base Scripts Start -->
<script src="{{ asset('build/assets/js/base/helpers.js') }}"></script>
<script src="{{ asset('build/assets/js/base/globals.js') }}"></script>
<script src="{{ asset('build/assets/js/base/nav.js') }}"></script>
<script src="{{ asset('build/assets/js/base/search.js') }}"></script>
<script src="{{ asset('build/assets/js/base/settings.js') }}"></script>
<!-- Template Base Scripts End -->
<!-- Page Specific Scripts Start -->
@stack('js_page')
<script src="{{ asset('build/assets/js/common.js') }}"></script>
<script src="{{ asset('build/assets/js/scripts.js') }}"></script>
<!-- Page Specific Scripts End -->
