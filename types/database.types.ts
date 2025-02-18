export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      asdf: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      category: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      griddle_event: {
        Row: {
          created_at: string
          date: string
          id: string
          recipe_id: string
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          recipe_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          recipe_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "griddle_event_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "griddle_recipe"
            referencedColumns: ["id"]
          },
        ]
      }
      griddle_event_user: {
        Row: {
          created_at: string
          event_id: string
          id: string
          is_chef: boolean
          user_id: string
        }
        Insert: {
          created_at?: string
          event_id: string
          id?: string
          is_chef?: boolean
          user_id: string
        }
        Update: {
          created_at?: string
          event_id?: string
          id?: string
          is_chef?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "griddle_event_user_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "griddle_event"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "griddle_event_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "griddle_user"
            referencedColumns: ["id"]
          },
        ]
      }
      griddle_ingredients: {
        Row: {
          created_at: string
          id: string
          metric: Database["public"]["Enums"]["griddle_ingredient_metric"]
          name: string
          quantity: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          metric: Database["public"]["Enums"]["griddle_ingredient_metric"]
          name: string
          quantity?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          metric?: Database["public"]["Enums"]["griddle_ingredient_metric"]
          name?: string
          quantity?: number
          updated_at?: string
        }
        Relationships: []
      }
      griddle_recipe: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      griddle_recipe_ingredient: {
        Row: {
          count: number
          created_at: string
          id: string
          ingredient_id: string
          recipe_id: string
        }
        Insert: {
          count?: number
          created_at?: string
          id?: string
          ingredient_id: string
          recipe_id: string
        }
        Update: {
          count?: number
          created_at?: string
          id?: string
          ingredient_id?: string
          recipe_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "griddle_recipe_ingredient_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "griddle_ingredients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "griddle_recipe_ingredient_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "griddle_recipe"
            referencedColumns: ["id"]
          },
        ]
      }
      griddle_user: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      iphone_messages: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          name: string
          text: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          name: string
          text?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          name?: string
          text?: string | null
        }
        Relationships: []
      }
      iphone_post_likes: {
        Row: {
          created_at: string
          id: string
          post_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          post_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "iphone_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "iphone_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      iphone_posts: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          name: string | null
          text: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          name?: string | null
          text?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          name?: string | null
          text?: string | null
        }
        Relationships: []
      }
      push: {
        Row: {
          created_at: string
          id: number
          token: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          token?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          token?: string | null
        }
        Relationships: []
      }
      qr_msgs: {
        Row: {
          created_at: string
          id: string
          msg: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          msg?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          msg?: string | null
          name?: string | null
        }
        Relationships: []
      }
      sql_query_log: {
        Row: {
          created_at: string | null
          error_message: string | null
          execution_time: number | null
          id: number
          notes: string | null
          operation_type: string | null
          query_text: string
          status: string | null
          table_name: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          execution_time?: number | null
          id?: number
          notes?: string | null
          operation_type?: string | null
          query_text: string
          status?: string | null
          table_name?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          execution_time?: number | null
          id?: number
          notes?: string | null
          operation_type?: string | null
          query_text?: string
          status?: string | null
          table_name?: string | null
        }
        Relationships: []
      }
      todo: {
        Row: {
          category_id: string
          created_at: string
          embedding: string | null
          id: string
          note: string
          priority: Database["public"]["Enums"]["new_priority_enum"]
          status: Database["public"]["Enums"]["new_status_enum"]
        }
        Insert: {
          category_id: string
          created_at?: string
          embedding?: string | null
          id?: string
          note: string
          priority: Database["public"]["Enums"]["new_priority_enum"]
          status: Database["public"]["Enums"]["new_status_enum"]
        }
        Update: {
          category_id?: string
          created_at?: string
          embedding?: string | null
          id?: string
          note?: string
          priority?: Database["public"]["Enums"]["new_priority_enum"]
          status?: Database["public"]["Enums"]["new_status_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "fk_category"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      execute_sql: {
        Args: {
          sql: string
        }
        Returns: Json
      }
      get_events: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          date: string
          recipe_id: string
          recipe_name: string
          attendees: Json
        }[]
      }
      get_posts_with_like_count: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          created_at: string
          text: string
          name: string
          image_url: string
          like_count: number
        }[]
      }
      get_recipes: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          ingredients: Json
        }[]
      }
      get_todos: {
        Args: {
          _category?: string
          _priority?: Database["public"]["Enums"]["new_priority_enum"]
          _status?: Database["public"]["Enums"]["new_status_enum"]
        }
        Returns: {
          id: string
          note: string
          category: string
          priority: Database["public"]["Enums"]["new_priority_enum"]
          status: Database["public"]["Enums"]["new_status_enum"]
        }[]
      }
      search_todos_by_embedding: {
        Args: {
          embedding: string
          top_k?: number
        }
        Returns: {
          id: string
          note: string
          category_name: string
          similarity_score: number
        }[]
      }
    }
    Enums: {
      griddle_ingredient_metric:
        | "milligram"
        | "gram"
        | "kilgram"
        | "ounce"
        | "pound"
        | "milliliter"
        | "liter"
        | "teaspoom"
        | "tablespoon"
        | "fluid_ounce"
        | "cup"
        | "pint"
        | "quart"
        | "gallon"
        | "count"
      new_priority_enum: "Low" | "Medium" | "High"
      new_status_enum: "Not Started" | "In Progress" | "Completed"
      priority_enum: "Low" | "Medium" | "High"
      recurrence_enum: "None" | "Daily" | "Weekly" | "Monthly"
      status_enum:
        | "Not Started"
        | "In Progress"
        | "Completed"
        | "On Hold"
        | "Cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
