<script lang="ts">
    import HideToggle from "./HideToggle.svelte"
  
    export let name: string = ""
    export let url: string = ""
    export let details: string[] = []
  </script>
  
  <div class="work-experience">
    <HideToggle />
    <div class="flex font-bold mb-2 print:mb-1">
      <div class="flex-1 text-left">{name}</div>
    </div>
    <ul class="text-left list-disc pl-8 print:pl-6">
      {#each details as detail}
        <li>
          <HideToggle />
          {detail}
        </li>
        {/each}
        <a href="https://{url}" target="_blank" rel="noreferrer"
            ><strong>{url}</strong></a
          >
    </ul>
  </div>
  
  <style>
    .work-experience {
      @apply my-4;
    }
  
    a {
      text-decoration: underline;
    }
  
    @media print {
      .work-experience {
        @apply my-1;
      }
    }
  </style>
  