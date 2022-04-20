import { Ref } from "vue";

export function useIntersectOnce() {
    return (el: Ref<HTMLElement>) => {
        const visibility = useElementVisibility(el);
        const isVisible = ref(false);
      
        watchOnce(visibility, () => {
          console.log(el.value, "Seen");
          isVisible.value = true
        });
      
        return isVisible;
    }
}
